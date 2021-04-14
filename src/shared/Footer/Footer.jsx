import React from "react";
import styles from "./Footer.module.scss";
import telegram from "../../img/telegram.png";
import whatsapp from "../../img/whatsapp.png";
import viber from "../../img/viber.png";
import instagram from "../../img/instagram.png";

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.contacts}>
          <p>Свяжитесь с нами:</p>
          <div className={styles.number}>
            <img src={telegram} alt="telegram" />
            <img src={whatsapp} alt="whatsapp" />
            <img src={viber} alt="viber" />
            <span>+380000000000</span>
          </div>
        </div>
        <div className={styles.instagram}>
          <p>Следите за нами в Instagram: </p>
          <a href="https://www.instagram.com/chocoharmoni/"><img src={instagram} alt="instagram" /></a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
