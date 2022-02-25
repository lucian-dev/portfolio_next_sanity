import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Typed from 'typed.js';
import styles from './Home.module.scss';

const HomeContent = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Tailored to your needs\nFast and Secure\nFully responsive\nBuilt to last\n '],
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
        <p>Experienced at delivering successful websites for your online project.</p>
        <Link href="/about">
          <a className="btnS">...more about me</a>
        </Link>
      </div>
      <div className={styles.typed}>
        <i>#your website will be &#123;</i>
        <div className={styles.typedStrings}>
          <span ref={el}></span>
        </div>
        <i>&#125;</i>
      </div>
    </div>
  );
};

export default HomeContent;
