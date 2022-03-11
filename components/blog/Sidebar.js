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
      {children}
    </motion.div>
  );
};

export default Sidebar;
