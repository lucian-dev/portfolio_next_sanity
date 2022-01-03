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
          <p>I build different types of websites like One-Page, Multi-Page, E-commerce, Portfolio, Blogs, Landing Pages.</p>
          <p>Back in 2013, I started with HTML/CSS to develop websites for personal projects as well as for certain local businesses.</p>
          <p>
            In time I added into my front-end skills: CSS Flexbox/Grid, Sass, jQuery, Gulp, tools that help me to build responsive layouts, animations, and gave me speed in
            developing websites.
          </p>
          <p>
            Then I discover WordPress, the most used CMS, which due to its flexibility and intuitive dashboard, which helps my clients to easily manage the content of the website,
            I start using it in most projects, making custom themes.
          </p>
          <p>I'm also comfortable using PHP (for WP), Webpack, NPM, Git. Currently, loveship remain's for JavaScript, React, Jamstack world.</p>
          <p>
            I have been able to enjoy the success of projects made in various fields with their initiators, working both as a freelancer but also collaborating with web design
            agencies such as{' '}
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
            , Creativ89.
          </p>
          <p>
            If you'd like to find out more about how I work or if you want to start a new project, please <Link href="/contact">contact me</Link> and give me information about the
            project you have in mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
