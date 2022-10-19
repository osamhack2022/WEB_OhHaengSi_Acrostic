import React from 'react';
import styles from '../styles/Footer.module.scss';

function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <label>Copyright © 2022 오행시 | MIT license</label>
    </footer>
  );
}

export default Footer;
