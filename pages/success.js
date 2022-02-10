import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { BsCheck2Circle } from 'react-icons/bs';
import styles from '@components/layout/Layout.module.scss';

const Success = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 3500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Message Sent - Lucian-DEV</title>
      </Head>
      <section className={styles.mainSection}>
        <div className={styles.displayContent}>
          <div className={styles.container}>
            <div className="success">
              <div>
                <BsCheck2Circle />
                <h1>Thank you!</h1>
                <p>I will get back to you soon!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Success;
