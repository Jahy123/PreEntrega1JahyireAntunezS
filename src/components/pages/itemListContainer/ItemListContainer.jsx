import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  // console.log(categoryName ? "filtrando" : "Home");

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });
    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);
  return <ItemList items={items} />;
};
