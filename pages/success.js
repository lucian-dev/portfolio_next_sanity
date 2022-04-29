import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { BsCheck2Circle } from 'react-icons/bs';
import HeadSeo from '@components/head/HeadSeo';
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
  }, [router]);

  return (
    <>
      <HeadSeo
        title={`Message Sent - Lucian-DEV`}
        description="I build different types of websites like One-Page, Magazine, E-commerce, Portfolio, Blogs, Landing Pages."
        ogType={'website'}
      />
      <motion.section
        className={styles.mainSection}
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.6, duration: 0.5, damping: 14 }}
        exit={{ opacity: 0 }}
      >
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
      </motion.section>
    </>
  );
};

export default Success;
