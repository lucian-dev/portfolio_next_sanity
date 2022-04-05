import Link from 'next/link';
import styles from './About.module.scss';

const AboutContent = () => {
  return (
    <div className={styles.aboutSection}>
      <div className="mainTitle textCenter">
        <h1>
          About <span>Me</span>
        </h1>
        <p>I am a Front-End Developer based in Bucharest, Romania.</p>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>
            Since 2015 I&apos;m creating successful websites for different types of businesses,
            especially in fields like wellness, laws, education, and real estate.
          </p>
          <p>
            I enjoy knowing your business, your goals, and how I can add value to your website to
            help you succeed.
          </p>
          <p>
            After understanding your project needs, I can use my experience to determine the right
            tools and development methods. Usually, simple and efficient methods work best.
          </p>
          <p>
            I like working with WordPress CMS, due to its flexibility and intuitive dashboard which
            offer the possibility to insert content easily. The WordPress sites I create are
            bespoke, specifically for the end-user.
          </p>
          <p>
            I also work with JAMstack architecture (React, Next-JS) for a better experience,
            performance, and scalability.
          </p>
          <p>
            I have been able to enjoy the success of projects working both as a freelancer but also
            collaborating with web design agencies such as{' '}
            <a href="https://quart.ro" target="_blank" rel="noreferrer noopener">
              Quart Agency
            </a>
            ,{' '}
            <a href="https://yass.ro" target="_blank" rel="noreferrer noopener">
              YASS
            </a>
            ,{' '}
            <a href="https://connecto.ro" target="_blank" rel="noreferrer noopener">
              Connecto Agency
            </a>
            ,{' '}
            <a href="https://www.vav-digital.com/" target="_blank" rel="noreferrer noopener">
              VAV-Digital
            </a>
            , Creativ89.
          </p>
          <p>
            If you&apos;d like to start a successful project, look no more for a developer for your
            website. Let&apos;s build together, <Link href="/contact">contact me</Link>.
          </p>
          <p>
            Current stack__
            <span>#css #js #react #next-js #wordpress #netlify</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
