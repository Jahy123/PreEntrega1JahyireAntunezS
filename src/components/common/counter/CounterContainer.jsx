import { useState } from "react";
import CounterPresentacional from "./CounterPresentacional";
import Swal from "sweetalert2";
const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire("Cantidad máxima", "", "warning");
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
