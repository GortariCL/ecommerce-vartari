import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Error } from "./components/Error/Error";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer title="Nuestros productos" />}
          />
          <Route
            path="/cocktails"
            element={<ItemListContainer title="Nuestros productos" />}
          />
          <Route
            path="/cocktails/:id"
            element={<ItemListContainer title="Nuestros productos" />}
          />
          <Route
            path="/vinos"
            element={<ItemListContainer title="Nuestros productos" />}
          />
          <Route
            path="/vinos/:id"
            element={<ItemListContainer title="Nuestros productos" />}
          />
          <Route
            path="/cervezas"
            element={<ItemListContainer title="Nuestros productos" />}
          />
          <Route
            path="/cervezas/:id"
            element={<ItemListContainer title="Nuestros productos" />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
