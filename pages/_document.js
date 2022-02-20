import Document, { Html, Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from '@components/GoogleAnalytics';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
          <link
            href="https://fonts.googleapis.com/css2?family=Mulish&family=Poppins:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
