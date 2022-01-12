import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Typed from 'typed.js';
import styles from './Home.module.scss';

const HomeContent = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['display: flex;\nalign-items: center;\njustify-content: space-between;\n '],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h1>
          Hello, <span>I&apos;M Lucian</span>
        </h1>
        <p>I am a Front-end Developer based in Bucharest, Romania.</p>
        <p>I build different types of websites like One-Page, Magazine, E-commerce, Portfolio, Blogs, Landing Pages.</p>
        <Link href="/about">
          <a className="btnS">...more about me</a>
        </Link>
      </div>
      <div className={styles.typed}>
        <i>.content &#123;</i>
        <div className={styles.typedStrings}>
          <span ref={el}></span>
        </div>
        <i>&#125;</i>
      </div>
    </div>
  );
};

export default HomeContent;
