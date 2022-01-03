import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '@components/layout/Layout.module.scss';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <section className={styles.mainSection}>
      <div className={styles.displayContent}>
        <div className={styles.container}>
          <div className={styles.page404}>
            <div className={styles.page404Content}>
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
    </section>
  );
};

export default NotFound;
