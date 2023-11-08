import { useContext, useEffect, useState } from "react";

import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

// const ItemDetailContainer = () => {
//   const [productSelected, setProductSelected] = useState({});

//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   useEffect(() => {
//     let producto = products.find((product) => product.id === +id);

//     const getProduct = new Promise((resolve, reject) => {
//       resolve(producto);
//       // reject("error");
//     });

//     getProduct
//       .then((res) => setProductSelected(res))
//       .catch((err) => console.log(err));
//   }, [id]);

//   const onAdd = (cantidad) => {
//     let product = {
//       ...productSelected,
//       quantity: cantidad,
//     };
//     addToCart(product);
//   };

//   return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
// };

// export default ItemDetailContainer;
const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const [showCounter, setShowCounter] = useState(true);

  const { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(+id);

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelected({ id: res.id, ...res.data() });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let item = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(item);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });

    setShowCounter(false);
  };

  return (
    <ItemDetail
      showCounter={showCounter}
      productSelected={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
    />
  );
};

export default ItemDetailContainer;
