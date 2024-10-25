// Crucial
import React from "react";

// Homesocial CSS
import styles from "./Homesocial.module.css";

// Image
import phoneguy from "../../../../assets/images/phone_guy_home.png";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Homesocial = () => {
  return (
    <div className={styles.homeSocial_container}>
      <img src={phoneguy} alt="joven hablando por teléfono" />

      <div className={styles.homeSocial_container_text}>
        <span>lorem ipsum</span>

        <h2>Lorem impsum diaor seculum</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore
          officia doloremque repellat quia quo qui.
        </p>

        <ul className={styles.homeSocial_icons_container}>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>

          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
          </li>

          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Homesocial;
