import StickyBox from 'react-sticky-box';
import { motion } from 'framer-motion';
import styles from './Blog.module.scss';

const Sidebar = ({ children }) => {
  return (
    <motion.div
      className={styles.sidebar}
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring' }}
    >
      <StickyBox offsetTop={100} offsetBottom={0}>
        {children}
      </StickyBox>
    </motion.div>
  );
};

export default Sidebar;
