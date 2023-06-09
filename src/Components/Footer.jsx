import React from 'react';
import { useContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { theme } = useContextGlobal();
  return (
    <footer className={theme.color}>
      <div>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
      </div>
      <div>
        <ul>
          <li><img src="./images/ico-facebook.png" alt="facebook" /></li>
          <li><img src="./images/ico-instagram.png" alt="instagram" /></li>
          <li><img src="./images/ico-whatsapp.png" alt="whatsapp" /></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer