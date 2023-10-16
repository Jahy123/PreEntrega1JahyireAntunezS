import { useState, useEffect } from "react";
import CounterPresentacional from "./CounterPresentacional";

const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(0);

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

  return (
    <CounterPresentacional
      sumar={sumar}
      contador={contador}
      restar={restar}
      onAdd={onAdd}
    />
  );
};

export default CounterContainer;
