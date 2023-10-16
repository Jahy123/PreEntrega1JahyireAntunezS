import { useState } from "react";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { Navbar } from "./components/layout/navbar/Navbar";

function App() {
  const [montar, setMontar] = useState(false);
  return (
    <div>
      <Navbar />
      {/* <button onClick={() => setMontar(!montar)}>Montar/Desmontar</button>
      montar && <CounterContainer stock={20} />
      <ItemListContainer />
      <FetchingData /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
