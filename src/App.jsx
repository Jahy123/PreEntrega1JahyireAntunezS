import { useState } from "react";
import CounterContainer from "./components/common/counter/CounterContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import FetchingData from "./components/pages/itemListContainer/fetchingData/FetchingData";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";

function App() {
  const [montar, setMontar] = useState(false);
  return (
    <div>
      <Navbar />
      {/* <button onClick={() => setMontar(!montar)}>Montar/Desmontar</button> */}

      {montar && <CounterContainer stock={20} />}
      {/*<ItemListContainer />
      <FetchingData /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
