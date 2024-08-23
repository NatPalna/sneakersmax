import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav__item}>
          <Link to="/sneakermax#catalog" className={styles.nav__link}>
            Каталог
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/sneakermax#aboutUs" className={styles.nav__link}>
            О нас
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/sneakermax#quiz" className={styles.nav__link}>
            Подбор товара
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/sneakermax#team" className={styles.nav__link}>
            Наша команда
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/sneakermax" className={styles.nav__link}>
            Доставка и оплата
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/sneakermax#contacts" className={styles.nav__link}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
