import styles from "./itemListContainer.module.css";

export const ItemListContainer = ({ saludo }) => {
  return (
    <div className={styles.contenedorTitulo}>
      <h1 className={styles.titulo}>{saludo}</h1>
      <div className={styles.contenedorLogo}>
        <img
          className={styles.logo}
          src="https://res.cloudinary.com/drqhvncqw/image/upload/v1695848304/Teendencia_1_pkhk0u.png"
          alt="Logo de Teen|dencia"
        />
      </div>
    </div>
  );
};
