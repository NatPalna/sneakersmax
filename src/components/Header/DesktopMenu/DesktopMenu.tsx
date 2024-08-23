import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { NavHashLink } from "react-router-hash-link";

export const DesktopMenu = () => {
  return (
    <div className={styles.nav}>
      <Link to="/sneakermax#catalog" className={styles.nav__link}>
        Каталог
      </Link>
      <NavHashLink to="/sneakermax#aboutus" className={styles.nav__link} smooth>
        О нас
      </NavHashLink>
      <Link to="/sneakermax#quiz" className={styles.nav__link}>
        Подбор товара
      </Link>
      <Link to="/sneakermax#team" className={styles.nav__link}>
        Наша команда
      </Link>
      <Link to="/sneakermax" className={styles.nav__link}>
        Доставка и оплата
      </Link>
    </div>
  );
};
