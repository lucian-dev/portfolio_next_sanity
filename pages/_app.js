import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { ThemeProvider } from 'next-themes';
import NProgress from 'nprogress';
import GoogleAnalytics from '@components/GoogleAnalytics';
import Layout from '@components/layout/Layout';
import '@styles/globals.scss';
import '@styles/nprogress.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const start = () => NProgress.start();
    const end = () => NProgress.done();
    NProgress.configure({ easing: 'ease-in-out', speed: 750 });

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Lucian-DEV -- Freelance Front-end Developer</title>
        {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
      </Head>
      <ThemeProvider storageKey="theme" defaultTheme="dark" enableColorScheme={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
