import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Gracias por ingresar en nuestra tienda... pronto tendrémos novedades 😁" />
    </div>
  );
}

export default App;
