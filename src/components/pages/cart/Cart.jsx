import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import styles from "./Cart.module.css";
import Swal from "sweetalert2";

function Cart() {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Esta acción no se puede deshacer",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Continuar",
      denyButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se vació el carrito", "", "warning");
      }
    });
  };

  return (
    <section className={styles.carrito}>
      Carrito de compra :)
      <div className={styles.productos}>
        {cart.map((product) => (
          <div className={styles.producto} key={product.id}>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>cantidad: {product.quantity}</p>
            <button
              className={styles.boton}
              onClick={() => deleteProductById(product.id)}
            >
              borrar
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className={styles.comprar}>
          <h2>El total a pagar es : ${total}</h2>
          <div className={styles.botones}>
            <Link to="/checkout">
              <button className={styles.botonComprar}>Finalizar compra</button>
            </Link>
            <button
              className={styles.botonComprar}
              onClick={clearCartWithAlert}
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
