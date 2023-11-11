import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
const ProductCard = ({ item }) => {
  return (
    <div className={styles.contenedor}>
      <img className={styles.img} src={item.img} alt="" />
      <h2 className={styles.h2}>{item.title}</h2>

      {item.stock > 0 ? (
        <Link to={`/item/${item.id}`} className={styles.enlace}>
          <button className={styles.button}>Ver detalle</button>
        </Link>
      ) : (
        <button className={styles.buttonSinStock}>No disponible</button>
      )}
    </div>
  );
};

export default ProductCard;
