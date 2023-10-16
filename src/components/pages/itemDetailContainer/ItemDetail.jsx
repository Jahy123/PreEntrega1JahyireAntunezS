import CounterContainer from "../../common/counter/CounterContainer";
import styles from "./itemDetail.module.css";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div className={styles.contenedorDetalles}>
      <img src={productSelected.img} alt="" />
      <h1>{productSelected.title}</h1>
      <h2>{productSelected.description}</h2>
      <div className={styles.contenedorPrecioYAgregar}>
        <h2>${productSelected.price}.00</h2>
        <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};
