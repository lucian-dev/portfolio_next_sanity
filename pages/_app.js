import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import NProgress from 'nprogress';
import Layout from '@components/layout/Layout';
import '@styles/globals.scss';
import '@styles/nprogress.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const start = () => NProgress.start();
    const end = () => NProgress.done();
    NProgress.configure({ easing: 'ease-in-out', speed: 750 });

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);

    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Lucian-DEV -- Freelance Front-end Developer</title>
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
