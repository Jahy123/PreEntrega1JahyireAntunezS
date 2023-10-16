import styles from "./Counter.module.css";
const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div className={styles.contador}>
      <button className={styles.botones} onClick={sumar}>
        +
      </button>
      <h4> {contador} </h4>
      <button className={styles.botones} onClick={restar}>
        -
      </button>
      <button className={styles.botones} onClick={() => onAdd(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default CounterPresentacional;
