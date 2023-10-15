const CounterPresentacional = ({
  sumar,
  contador,
  restar,
  nombre,
  setNombre,
}) => {
  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <h4>{contador}</h4>
      <button onClick={restar}>Restar</button>
      <h4>{nombre}</h4>
      <button onClick={() => setNombre("Juancito")}>Cambiar nombre</button>
    </div>
  );
};

export default CounterPresentacional;
