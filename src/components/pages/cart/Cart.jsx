import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <h2>Carrito</h2>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </>
    // <div>
    //   <h2>Carrito</h2>
    //   <Link to="/checkout">
    //     <button>Finalizar compra</button>
    //   </Link>
    // </div>
  );
}

export default Cart;
