import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null);
  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    email: null,
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const total = getTotalPrice();

  const handleSubmit = (e) => {
    e.preventDefault();
    let order = {
      buyer: userInfo,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    if (userInfo.nombre.length < 5) {
      setErrors({
        ...errors,
        nombre: "El nombre debe tener al menos 5 caracteres",
      });

      if (!userInfo.email.includes("@")) {
        setErrors({ ...errors, email: "No corresponde a un email valido" });
      }

      return;
    }
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((res) => setOrderId(res.id));
    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
    clearCart();
  };
  return (
    <>
      {orderId ? (
        <div className={styles.formConfirmado}>
          <h2>Gracias por su compra. El número de orden es: {orderId}.</h2>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            onChange={handleChange}
            placeholder="nombre"
          />
          <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
            {errors.nombre}
          </span>
          <input
            type="text"
            name="apellido"
            onChange={handleChange}
            placeholder="apellido"
          />
          <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
            {errors.apellido}
          </span>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="email"
          />
          <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
            {errors.email}
          </span>

          <button className={styles.boton}>enviar</button>
          <button
            className={styles.boton}
            type="button"
            onClick={() => Swal.fire("No se realizó la orden", "", "warning")}
          >
            Cancelar
          </button>
        </form>
      )}
    </>
  );
};

export default Checkout;
