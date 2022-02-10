import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ContactForm from './ContactForm';
import styles from './Contact.module.scss';

const ContactContent = () => {
  return (
    <div className={styles.contact}>
      <div className="mainTitle textCenter">
        <h1>Contact</h1>
        <p>What project do you have in mind? Let&apos;s build together!</p>
      </div>
      <div className={styles.contactRow}>
        <div className={styles.social}>
          <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M31.8 18.7c4.6 0 8-3.5 8-8s-3.5-8-8-8-8 3.5-8 8 3.4 8 8 8zm0-10.8c1.6 0 2.7 1.1 2.7 2.7s-1.1 2.7-2.7 2.7-2.7-1.1-2.7-2.7 1.1-2.7 2.7-2.7zM23.7 28.8c2.1-2.1 5.1-3.5 8.3-3.5 3.2 0 6.2 1.3 8.3 3.5.5.5 1.3.8 1.9.8s1.3-.3 1.9-.8c1.1-1.1 1.1-2.7.3-3.8-3.2-3.5-7.5-5.4-12.1-5.4s-9.1 1.9-12.1 5.4c-1.1 1.1-.8 2.7.3 3.8.6 1.1 2.2 1.1 3.2 0zM13 50.8c4.6 0 8-3.5 8-8s-3.5-8-8-8-8 3.5-8 8 3.5 8 8 8zm0-10.7c1.6 0 2.7 1.1 2.7 2.7s-1.1 2.7-2.7 2.7-2.7-1.1-2.7-2.7 1.1-2.7 2.7-2.7zM12.7 51.6C8.1 51.6 3.6 53.5.6 57c-1.1 1.1-.8 2.7.3 3.8s2.7.8 3.8-.3C6.8 58.3 9.8 57 13 57s6.2 1.3 8.3 3.5c.5.5 1.3.8 1.9.8s1.3-.3 1.9-.8c1.1-1.1 1.1-2.7.3-3.8-3.5-2.9-8.1-5.1-12.7-5.1zM50.6 50.8c4.6 0 8-3.5 8-8s-3.5-8-8-8-8 3.5-8 8 3.4 8 8 8zm0-10.7c1.6 0 2.7 1.1 2.7 2.7s-1.1 2.7-2.7 2.7-2.7-1.1-2.7-2.7 1-2.7 2.7-2.7zM63.2 57c-3.2-3.5-7.5-5.4-12.1-5.4S42 53.5 39 57c-1.1 1.1-.8 2.7.3 3.8 1.1 1.1 2.7.8 3.8-.3 2.1-2.1 5.1-3.5 8.3-3.5 3.2 0 6.2 1.3 8.3 3.5.5.5 1.3.8 1.9.8s1.3-.3 1.9-.8c.7-.6.7-2.4-.3-3.5z" />
              <path d="M39.6 41.2c.5-1.3 0-2.9-1.3-3.5l-3.8-1.6v-4c0-1.6-1.1-2.7-2.7-2.7s-2.7 1.1-2.7 2.7v3.8l-3.8 1.9c-1.3.5-1.9 2.1-1.3 3.5.5 1.3 2.1 1.9 3.5 1.3l4-1.9 4.3 1.9c.5.3 1.1.3 1.3.3 1.1-.1 1.9-.7 2.5-1.7z" />
            </svg>
          </span>
          <h5>Social</h5>
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
        </div>
        <div className={styles.email}>
          <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M58.7 10.7H5.3C2.4 10.7 0 13.1 0 16v32c0 2.9 2.4 5.3 5.3 5.3h53.3c2.9 0 5.3-2.4 5.3-5.3V16c.1-2.9-2.3-5.3-5.2-5.3zM52.3 16L33.1 27.7c-.5.3-1.3.3-1.9 0L11.7 16h40.6zm-47 32V18.4l22.9 13.9c1.1.8 2.4 1.1 3.7 1.1 1.3 0 2.7-.3 3.7-1.1l22.9-13.9V48H5.3z" />
            </svg>
          </span>
          <h5>Email</h5>
          <a href="mailto:lucian.dev13@gmail.com">lucian.dev13[at]gmail.com</a>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactContent;
