import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga from '@utils/trackViews';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import NProgress from 'nprogress';
import Layout from '@components/layout/Layout';
import '@styles/globals.scss';
import '@styles/nprogress.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    const start = () => NProgress.start();
    const end = () => NProgress.done();
    NProgress.configure({ easing: 'ease-in-out', speed: 750 });

    router.events.on('routeChangeComplete', handleRouteChange);

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);

      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, [router.events]);

  return (
    <ThemeProvider storageKey="theme" defaultTheme="dark" enableColorScheme={false}>
      <Layout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
