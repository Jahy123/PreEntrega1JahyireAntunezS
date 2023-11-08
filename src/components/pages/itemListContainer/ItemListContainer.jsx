import { useState, useEffect } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import Skeleton from "@mui/material/Skeleton";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = undefined;
    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(newArray);
    });

    // if (!categoryName) {
    //   let productsCollection = collection(db, "products");
    //   getDocs(productsCollection).then((res) => {
    //     let newArray = res.docs.map((product) => {
    //       return { id: product.id, ...product.data() };
    //     });
    //     setItems(newArray);
    //   });
    // } else {
    //   let productsCollection = collection(db, "products");
    //   let collectionFiltered = query(
    //     productsCollection,
    //     where("category", "==", categoryName)
    //   );
    //   getDocs(collectionFiltered).then((res) => {
    //     let newArray = res.docs.map((product) => {
    //       return { id: product.id, ...product.data() };
    //     });
    //     setItems(newArray);
    //   });
    // }
  }, [categoryName]);

  // IF CON RETURN TEMPRANO
  // if(items.length === 0){
  //   return <h1>Cargando.......</h1>
  // }

  return (
    <>
      {/* Ternario  ? */}
      {/* {items.length === 0 ? (
        <BeatLoader size={40} color="red" cssOverride={{}}/>
      ) : (
        <ItemList items={items} />
      )} */}

      {items.length === 0 ? (
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="text" width={80} height={40} />
            <Skeleton variant="text" width={150} height={30} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="text" width={80} height={40} />
            <Skeleton variant="text" width={150} height={30} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="text" width={80} height={40} />
            <Skeleton variant="text" width={150} height={30} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="text" width={80} height={40} />
            <Skeleton variant="text" width={150} height={30} />
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}

      {/* <h3>Hola</h3>
      <h3>chau</h3>
      <h3>pepito</h3> */}

      {/* con el operador and && */}

      {/* {items.length > 0 && <h3>Ya termino de cargar</h3>} */}
    </>
  );
};

//   const [items, setItems] = useState([]);

//   const { categoryName } = useParams();

//   useEffect(() => {
//     const productosFiltrados = products.filter(
//       (product) => product.category === categoryName
//     );
//     const tarea = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(categoryName ? productosFiltrados : products);
//       }, 500);
//     });
//     tarea.then((res) => setItems(res)).catch((error) => console.log(error));
//   }, [categoryName]);
//   return <ItemList items={items} />;
// };
