import styles from "./Contacto.module.css";
import React from "react";
import ContactForm from "../../components/features/contactForm/ContactForm";
import contactPerson from "../../assets/images/contact_person.png";
import contactArrow from "../../assets/images/contact_arrow.png";
const Contacto = () => {
  return (
    <main className={styles.contact}>
      <div>
        <h1>Ponete en contacto con nosotros</h1>
        <ContactForm />
      </div>
      <aside>
        <img src={contactPerson} alt="persona" />
        <img src={contactArrow} alt="arrow down" />
        <div className={styles.info}>
          <span>Lorem ipsum</span>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className={styles.info}>
          <span>Lorem ipsum</span>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className={styles.info}>
          <span>Lorem ipsum</span>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </aside>
    </main>
  );
};

export default Contacto;
