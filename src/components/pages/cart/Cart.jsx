import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { products } from "../../../productsMock";

function Cart() {
  // const { cart } = useContext(CartContext);
  // return (
  //   <>
  //     <h2>Carrito</h2>
  //     {cart.map((product) => (
  //       <div key={product.id}>
  //         <h2>{product.title}</h2>
  //         <h2>cantidad: {product.quantity}</h2>
  //       </div>
  //     ))}
  //     <Link to="/checkout">
  //       <button>Finalizar compra</button>
  //     </Link>
  //     <Button onClick={clearCart}>Vaciar Carrito</Button>
  // </>
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h1>Estoy en el carrito</h1>

      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h2>cantidad: {product.quantity}</h2>
        </div>
      ))}

      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>

      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
}

export default Cart;
