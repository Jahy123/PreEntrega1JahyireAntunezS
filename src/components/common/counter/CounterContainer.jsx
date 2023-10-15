import { useState, useEffect } from "react";
import CounterPresentacional from "./CounterPresentacional";

const CounterContainer = ({ stock }) => {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("pepito");
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("cantidad máxima");
    }
  };
  const restar = () => {
    if (contador >= 1) {
      setContador(contador - 1);
    }
  };
  console.log("Montaje o actualización");
  useEffect(() => {
    console.log("Se realizo una peticion");
  }, [nombre, contador]);

  return (
    <CounterPresentacional
      sumar={sumar}
      contador={contador}
      restar={restar}
      nombre={nombre}
      setNombre={setNombre}
    />
  );
};

export default CounterContainer;
