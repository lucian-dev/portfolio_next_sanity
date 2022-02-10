import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
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
  }, []);

  return (
    <section className={styles.mainSection}>
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
    </section>
  );
};

export default NotFound;
