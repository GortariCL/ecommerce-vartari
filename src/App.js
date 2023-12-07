import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeItemListContainer } from "./components/HomeItemListContainer/HomeItemListContainer";
import { Error } from "./components/Error/Error";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import { Cocktails } from "./components/Cocktails/Cocktails";
import { Vinos } from "./components/Vinos/Vinos";
import { Cervezas } from "./components/Cervezas/Cervezas";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<HomeItemListContainer title="Nuestros productos" />}
          />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/cocktails/:id" element={<HomeItemListContainer />} />
          <Route path="/vinos" element={<Vinos />} />
          <Route path="/vinos/:id" element={<HomeItemListContainer />} />
          <Route path="/cervezas" element={<Cervezas />} />
          <Route path="/cervezas/:id" element={<HomeItemListContainer />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
