import { useState } from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { menu } from '../../utils/data';
import ActiveLink from './ActiveLink';
import thumb from '../../public/th_lucian.jpg';
import styles from './Navbar.module.scss';

const Nav = () => {
  const [burger, setBurger] = useState(false);

  const handleClick = () => setBurger(!burger);

  return (
    <>
      <nav className={`${burger ? `${styles.activeBurger} ${styles.nav}` : `${styles.nav}`}`}>
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
          <a
            href="https://www.linkedin.com/in/lucian-dev/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/lucian-dev" target="_blank" rel="noreferrer noopener">
            <FaGithub />
          </a>
          <a href="https://codesandbox.io/u/lucian-dev" target="_blank" rel="noreferrer noopener">
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
      {burger && (
        <div className={styles.burgerMenu}>
          <div className={styles.burgerInner}>
            <ul className={styles.navigationBurger} initial="hidden" animate="visible">
              {menu.map((item) => (
                <li key={item.id}>
                  <ActiveLink href={item.path}>
                    <a onClick={handleClick}>{item.page}</a>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
