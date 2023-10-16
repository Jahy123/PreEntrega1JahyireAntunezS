import { useEffect, useState } from "react";
import Albums from "./Albums";
import axios from "axios";
const FetchingData = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // const tarea = fetch("https://jsonplaceholder.typicode.com/albums");

    // tarea
    //   .then((res) => res.json())
    //   .then((res) => setAlbums(res))
    //   .catch((err) => console.log(err));

    const tarea = axios.get("https://jsonplaceholder.typicode.com/albums");
    tarea.then((res) => setAlbums(res.data)).catch((err) => console.log(err));
  }, []);

  const crear = () => {
    // fetch("https://jsonplaceholder.typicode.com/albums/15", {
    //   method: "PUT",
    //   body: JSON.stringify( {
    //     userId: 2,
    //     title: "Album modificado",
    //   }),
    //   // headers: {
    //   //   "authorization": "Dsadsag123213dsadasd"
    //   // }
    // });
    axios.post("https://jsonplaceholder.typicode.com/albums", {
      userId: 2,
      title: "Album modificado",
    });
  };

  return <Albums albums={albums} crear={crear} />;
};

export default FetchingData;

// const FetchingData = () => {

//   const [albums, setAlbums] = useState([]);
//   console.log({ albums });
//   useEffect(() => {
// const tarea = axios.get("https://jsonplaceholder.typicode.com/albums");
// tarea.then((res) => setAlbums(res.data));
// const tarea = fetch("https://jsonplaceholder.typicode.com/albums");
// tarea
//   // .then((res) => {
//   //   console.log("res: ", res);
//   // })
//   // .catch((error) => {
//   //   console.log("error: ", error);
//   // });
//   .then((res) => res.json())
//   .then((res) => setAlbums(res))
//   .catch((error) => console.log(error));
//   }, []);

//   const crear = () => {
// UTILZANDO EL METODO GET
//     fetch("https://jsonplaceholder.typicode.com/albums", {
//       method: "POST",
//       body: JSON.stringify({
//         userId: 2,
//         title: "Nuevo album",
//       }),
//       //   headers: {
//       //     "autorizathion": "ferhfgaryf"
//       //   }
//     });
//   };

// UTILIZANDO EL METODO PUT

// fetch("https://jsonplaceholder.typicode.com/albums/15", {
//   method: "PUT",
//   body: JSON.stringify({
//     userId: 2,
//     title: "album modificado ",
//   }),
//   headers: {
//     "autorizathion": "ferhfgaryf"
//   }
// });

// UTILIZANDO POST con AXIOS
//     axios.post("https://jsonplaceholder.typicode.com/albums", {
//       userId: 2,
//       title: "album modificado",
//     });
//   };
// };

// return <Albums albums={albums} crear={crear} />;

// export default FetchingData;
