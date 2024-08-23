import styles from "./styles.module.css";
import logo from "../../assets/img/logo.svg";
import Nav from "../Nav/Nav";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer_container}`}>
        <img src={logo} alt="SneakMax" />
        <Nav />
      </div>
    </footer>
  );
};

export default Footer;
