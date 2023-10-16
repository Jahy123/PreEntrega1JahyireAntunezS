import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
const ProductCard = ({ item }) => {
  return (
    <div className={styles.contenedor}>
      <img className={styles.img} src={item.img} alt="" />
      <h2 className={styles.h2}>{item.title}</h2>
      <h3 className={styles.description}>{item.description}</h3>
      <Link to={`/itemDetail/${item.id}`} className={styles.button}>
        <button className={styles.button}>Ver detalle</button>
      </Link>
    </div>
  );
};

export default ProductCard;
