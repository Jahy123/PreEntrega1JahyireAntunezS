import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { products } from "../../../productsMock";
import { IconButton } from "@mui/material";
import Swal from "sweetalert2";

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
  //   const { cart, clearCart } = useContext(CartContext);

  //   return (
  //     <div>
  //       <h1>Estoy en el carrito</h1>

  //       {cart.map((product) => (
  //         <div key={product.id}>
  //           <h2>{product.title}</h2>
  //           <h2>cantidad: {product.quantity}</h2>
  //         </div>
  //       ))}

  //       <Link to="/checkout">
  //         <button>Finalizar compra</button>
  //       </Link>

  //       <button onClick={clearCart}>Vaciar Carrito</button>
  //     </div>
  //   );
  // }
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, eliminar!",
      denyButtonText: `No, no eliminar!`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "warning");
      }
    });
  };

  return (
    <div>
      <h1>Estoy en el carrito</h1>

      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <h3>cantidad: {product.quantity}</h3>
          {/* <Button onClick={() => deleteProductById(product.id)}>
            Eliminar
          </Button> */}
          <button onClick={() => deleteProductById(product.id)}>
            {/* <DeleteForeverIcon color="primary" /> */}
            borrar
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <h2>El total a pagar es : {total}</h2>

          <Link to="/checkout">
            <button>Finalizar compra</button>
          </Link>

          <button onClick={clearCartWithAlert}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
