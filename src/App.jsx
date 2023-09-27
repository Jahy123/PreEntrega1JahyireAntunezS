import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  let saludo = "Hola bienvenido a mi tienda";
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
