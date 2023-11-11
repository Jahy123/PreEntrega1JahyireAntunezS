import styles from "./Counter.module.css";

import Swal from "sweetalert2";
const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <>
      <button className={styles.botones} onClick={restar}>
        -
      </button>
      <p> {contador} </p>
      <button className={styles.botones} onClick={sumar}>
        +
      </button>
      <button
        className={styles.botonAgregar}
        onClick={() => {
          contador
            ? onAdd(contador)
            : Swal.fire("No has agregado nada aún", "", "warning");
        }}
      >
        Agregar al carrito
      </button>
    </>
  );
};
export default CounterPresentacional;
