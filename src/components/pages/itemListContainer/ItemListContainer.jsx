import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import styles from "./itemListContainer.module.css";

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
  }, [categoryName]);

  return (
    <>
      {items.length === 0 ? (
        <div className={styles.skeleton}>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={300}
            height={200}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={300}
            height={200}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={300}
            height={200}
          />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};
