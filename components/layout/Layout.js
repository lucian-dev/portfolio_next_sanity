import Navbar from '@components/navbar/Navbar';
import Footer from '@components/footer/Footer';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.mainWrapper}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
