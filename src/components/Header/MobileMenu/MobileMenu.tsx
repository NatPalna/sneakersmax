import { useState } from "react";
import styles from "./styles.module.css";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className={styles.mobile_menu}>
          <nav>
            <Link
              to="/sneakermax#catalog"
              className={styles.nav__link}
              onClick={handleLinkClick}
            >
              Каталог
            </Link>
            <Link
              to="/sneakermax#aboutUs"
              className={styles.nav__link}
              onClick={handleLinkClick}
            >
              О нас
            </Link>
            <Link
              to="/sneakermax#quiz"
              className={styles.nav__link}
              onClick={handleLinkClick}
            >
              Подбор товара
            </Link>
            <Link
              to="/sneakermax#team"
              className={styles.nav__link}
              onClick={handleLinkClick}
            >
              Наша команда
            </Link>
            <Link
              to="/sneakermax"
              className={styles.nav__link}
              onClick={handleLinkClick}
            >
              Доставка и оплата
            </Link>
            <Link
              to="/sneakermax#contacts"
              className={styles.nav__link}
              onClick={handleLinkClick}
            >
              Контакты
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
