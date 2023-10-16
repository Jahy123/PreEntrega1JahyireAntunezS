import ProductCard from "../../common/productCard/ProductCard";
import styles from "./itemListContainer.module.css";

const ItemList = ({ items }) => {
  return (
    <section className={styles.seccionProductos}>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ItemList;
