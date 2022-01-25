import Image from 'next/image';
import { useTheme } from 'next-themes';
import Navbar from '@components/navbar/Navbar';
import Footer from '@components/footer/Footer';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  const { setTheme } = useTheme('dark');

  return (
    <>
      <Navbar />
      <main className={styles.mainWrapper}>
        <div className="switch-mode">
          <span className="switch-mode__light">
            <Image
              src="/theme_mode.svg"
              width={22}
              height={22}
              onClick={() => setTheme('light')}
              alt="Theme Mode"
            />
          </span>
          <span className="switch-mode__dark">
            <Image
              src="/theme_mode.svg"
              width={22}
              height={22}
              onClick={() => setTheme('dark')}
              alt="Theme Mode"
            />
          </span>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
