import { ImHome } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { CartWidget } from "../../common/cardWidget/CartWidget";
import styles from "./navbar.module.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Link to="/" className={styles.contenedorLogo}>
          <img
            className={styles.logo}
            src="https://res.cloudinary.com/drqhvncqw/image/upload/v1695848304/Teendencia_1_pkhk0u.png"
            alt="Logo de Teen|dencia"
          />
        </Link>
        <ul className={styles.contenedorLista}>
          <Link to="/">
            <li>Productos en Teen|dencia</li>
          </Link>
          <Link to="category/urbanas">
            <li>urbanas</li>
          </Link>
          <Link to="category/deportivas">
            <li>Deportivas</li>
          </Link>

          <Link to="/" className={styles.contenedorIconos}>
            <ImHome className={styles.iconos} />
          </Link>
          <CartWidget />
        </ul>
      </div>
    </>
  );
};
