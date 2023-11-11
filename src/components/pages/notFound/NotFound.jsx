import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={styles.seccion}>
      <img
        className={styles.img}
        src="https://res.cloudinary.com/drqhvncqw/image/upload/v1699741793/Dise%C3%B1o_sin_t%C3%ADtulo_3_zplxgx.png"
        alt="Página de no encontrado/a"
      />
    </section>
  );
};

export default NotFound;
