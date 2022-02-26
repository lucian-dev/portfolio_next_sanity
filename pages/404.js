import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BiError } from 'react-icons/bi';
import styles from '@components/layout/Layout.module.scss';

const NotFound = () => {
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
    <motion.section
      className={styles.mainSection}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.6, duration: 0.5, damping: 14 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.displayContent}>
        <div className={styles.container}>
          <div className="page404">
            <div>
              <BiError />
              <h1>Oooops...</h1>
              <p>
                ...go{' '}
                <Link href="/">
                  <a className="btnS">Home</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default NotFound;
