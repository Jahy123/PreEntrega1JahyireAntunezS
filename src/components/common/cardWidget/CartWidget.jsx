import { IoIosCart } from "react-icons/io";
import styles from "./cartWidget.module.css";
export const CartWidget = () => {
  return (
    <li className={styles.contenedorIconos}>
      <span className={styles.iconos}>0</span>
      <IoIosCart className={styles.iconos} />
    </li>
  );
};
