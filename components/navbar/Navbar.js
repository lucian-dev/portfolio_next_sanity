import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { menu } from '@utils/data';
import siteMetadata from '@utils/siteMetadata';
import ActiveLink from './ActiveLink';
import thumb from '/public/th_lucian.jpg';
import styles from './Navbar.module.scss';

const navVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const linkVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Nav = () => {
  const [burger, setBurger] = useState(false);

  const handleClick = () => setBurger(!burger);
  return (
    <>
      <nav className={burger ? `${styles.activeBurger} ${styles.nav}` : styles.nav}>
        <div className={styles.head}>
          <div className={styles.thumbnail}>
            <Image
              src={thumb}
              alt="Lucian-DEV Frontend Developer"
              width={100}
              height={100}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRlACAABXRUJQVlA4WAoAAAAgAAAAPQMAbgIASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEwRAAAALz2DmwAHUKMa1aj/gYjofwAA"
            />
          </div>
          <h3>
            Lucian <span>DEV</span>
          </h3>
        </div>
        <ul className={styles.navigation}>
          {menu.map((item) => (
            <li key={item.id}>
              <ActiveLink href={item.path}>
                <a>
                  <span>0{item.id}</span>
                  {item.page}
                </a>
              </ActiveLink>
            </li>
          ))}
        </ul>
        <div className={styles.social}>
          <a href={siteMetadata.linkedin} target="_blank" rel="noreferrer noopener">
            <FaLinkedinIn />
          </a>
          <a href={siteMetadata.github} target="_blank" rel="noreferrer noopener">
            <FaGithub />
          </a>
          <a href={siteMetadata.codesandbox} target="_blank" rel="noreferrer noopener">
            <AiOutlineCodeSandbox />
          </a>
        </div>
        <div className={styles.burger}>
          {!burger ? (
            <GiHamburgerMenu onClick={handleClick} />
          ) : (
            <IoMdClose onClick={handleClick} />
          )}
        </div>
      </nav>
      <AnimatePresence>
        {burger && (
          <motion.div
            className={styles.burgerMenu}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.3 }}
            exit={{ x: '-100%', opacity: 0 }}
          >
            <motion.div className={styles.burgerInner}>
              <motion.ul
                className={styles.navigationBurger}
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                {menu.map((item) => (
                  <motion.li key={item.id} variants={linkVariants}>
                    <ActiveLink href={item.path}>
                      <a onClick={handleClick}>{item.page}</a>
                    </ActiveLink>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
