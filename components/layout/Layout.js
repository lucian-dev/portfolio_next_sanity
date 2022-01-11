import { useTheme } from 'next-themes';
import Navbar from '@components/navbar/Navbar';
import Footer from '@components/footer/Footer';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Navbar />
      <main className={styles.mainWrapper}>
        <div className="switch-mode">
          <span className="switch-mode__light">
            <img src="/theme_mode.svg" onClick={() => setTheme('light')} alt={`Mode-${theme}`} />
          </span>
          <span className="switch-mode__dark">
            <img src="/theme_mode.svg" onClick={() => setTheme('dark')} alt={`Mode-${theme}`} />
          </span>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
