import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className={styles.footer}>
        <div className={styles.contacts}>
          <p>Свяжитесь с нами:</p>
          <div className={styles.number}>
            <span>+380000000000</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;