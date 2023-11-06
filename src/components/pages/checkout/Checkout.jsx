import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    email: null,
  });
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  //   const capturarNombre = (e) => {
  //     setUserInfo({ ...userInfo, nombre: e.target.value });
  //   };
  //   const capturarApellido = (e) => {
  //     setUserInfo({ ...userInfo, apellido: e.target.value });
  //   };
  //   const capturarEmail = (e) => {
  //     setUserInfo({ ...userInfo, email: e.target.value });
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.nombre.length < 5) {
      console.log("entrooo");
      setErrors({
        ...errors,
        nombre: "El nombre debe tener al menos 5 caracteres",
      });

      if (!userInfo.email.includes("@")) {
        setErrors({ ...errors, email: "No corresponde a un email valido" });
      }

      return;
    }
    console.log(userInfo);
  };
  return (
    <>
      <div>Checkout</div>
      <form onSubmit={handleSubmit}>
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
        {/* <input type="text" name="nombre" onChange={capturarNombre} />
        <input type="text" name="apellido" onChange={capturarApellido} />
        <input type="text" name="email" onChange={capturarEmail} /> */}
        <button>enviar</button>
        <button type="button" onClick={() => console.log("Se canceló")}>
          Cancelar
        </button>
      </form>
    </>
  );
};

export default Checkout;
