import { IoIosCart } from "react-icons/io";
import styles from "./cartWidget.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const x = useContext(CartContext);
  return (
    <Link to="/cart" className={styles.contenedorIconos}>
      <span className={styles.iconos}>0</span>
      <IoIosCart className={styles.iconos} />
    </Link>
  );
};
