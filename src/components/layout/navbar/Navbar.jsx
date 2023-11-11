import { ImHome } from "react-icons/im";
import { CartWidget } from "../../common/cardWidget/CartWidget";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesCollection = collection(db, "categories");

    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });
        setCategories(arrayCategories);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.contenedorLogo}>
        <img
          className={styles.logo}
          src="https://res.cloudinary.com/drqhvncqw/image/upload/v1699649041/20231110_144000_0001-removebg-preview_ruktmc.png"
          alt="Logo de Teen|dencia"
        />
      </Link>
      <ul className={styles.contenedorLista}>
        <Link to="/">
          <li>Productos en Teen|dencia</li>
        </Link>
        {categories.map((category) => (
          <Link key={category.id} to={category.path}>
            <li>{category.name}</li>
          </Link>
        ))}

        <Link to="/" className={styles.contenedorIconos}>
          <ImHome className={styles.iconos} />
        </Link>
        <CartWidget />
      </ul>
    </nav>
  );
};
