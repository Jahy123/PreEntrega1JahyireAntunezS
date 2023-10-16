import styles from "./ProductCard.module.css";
const ProductCard = ({ item }) => {
  return (
    <div className={styles.contenedor}>
      <img className={styles.img} src={item.img} alt="" />
      <h2 className={styles.h2}>{item.title}</h2>
      <h3 className={styles.description}>{item.description}</h3>
    </div>
  );
};

export default ProductCard;
