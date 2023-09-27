import { ImHome } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { CartWidget } from "../../common/cardWidget/CartWidget";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.contenedorLogo}>
        <img
          className={styles.logo}
          src="https://res.cloudinary.com/drqhvncqw/image/upload/v1695848304/Teendencia_1_pkhk0u.png"
          alt="Logo de Teen|dencia"
        />
      </div>
      <ul className={styles.contenedorLista}>
        <li className={styles.contenedorIconos}>
          <ImHome className={styles.iconos} />
        </li>
        <li className={styles.contenedorIconos}>
          <FaUserCircle className={styles.iconos} />
        </li>
        <CartWidget />
        <li>Productos en Teen|dencia</li>
        <ul style={{ display: "none" }}>
          <li>2023</li>
          <li>2022</li>
          <li>2021</li>
          <li>2020</li>
        </ul>
      </ul>
    </div>
  );
};
