import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
        <Route path="/" element={<ItemListContainer title="Nuestros productos" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
