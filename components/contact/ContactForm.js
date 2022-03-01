import styles from './Contact.module.scss';

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/success"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      className={styles.form}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <input type="text" name="name" placeholder="*Your name..." required />
        </div>
        <div className={styles.formCol}>
          <input type="email" name="email" placeholder="*Your email..." required />
        </div>
      </div>
      <div className={styles.formRowFull}>
        <input type="text" name="subject" placeholder="*Subject..." required />
      </div>
      <div className={styles.formRowFull}>
        <textarea name="message" placeholder="*Your message..." required></textarea>
      </div>
      <div data-netlify-recaptcha="true"></div>
      <div className="textCenter">
        <button type="submit" className="btnS">
          SEND MESSAGE
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
