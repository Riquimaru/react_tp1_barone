import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Clock from './components/Clock/Clock'

function App() {
  return (
    <div className="App">
    <NavBar titulo={"Tienda Barone"} link1={"Productos"} link2={"Ofertas"}/>
    <ItemListContainer greeting={"Bienvenido a mi tienda"}/>
    <Clock />
    </div>
  );
}

export default App;
