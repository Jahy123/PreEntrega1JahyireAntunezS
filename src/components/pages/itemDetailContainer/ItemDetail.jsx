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
    <section className={styles.contenedorDetalles}>
      <div className={styles.contenedorImg}>
        <img className={styles.img} src={productSelected.img} alt="" />
      </div>
      <div className={styles.detalles}>
        <h1 className={styles.h1}>{productSelected.title}</h1>
        <h2 className={styles.h2}>{productSelected.description}</h2>
        <p className={styles.precio}>Precio: ${productSelected.price}.00</p>
        {initial && (
          <p className={styles.agregados}>
            Ya tienes {initial} unidad/es en tu carrito
          </p>
        )}

        {showCounter ? (
          <div className={styles.contador}>
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
    </section>
  );
};
