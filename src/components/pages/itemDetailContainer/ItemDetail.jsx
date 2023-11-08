import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import styles from "./itemDetail.module.css";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <div className={styles.contenedorDetalles}>
      <img className={styles.img} src={productSelected.img} alt="" />
      <h1 className={styles.h1}>{productSelected.title}</h1>
      <h2 className={styles.h2}>{productSelected.description}</h2>
      <div className={styles.contenedorPrecioYAgregar}>
        <h2>${productSelected.price}.00</h2>
        {/* <CounterContainer stock={productSelected.stock} onAdd={onAdd} /> */}
      </div>
      {initial && <h4>Ya tienes {initial} unidades</h4>}

      {showCounter ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div>
      ) : (
        <Link to="/cart">Terminar compra</Link>
      )}
    </div>
  );
};
