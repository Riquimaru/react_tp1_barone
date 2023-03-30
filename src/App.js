import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenido a mi tienda"} />}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={'Listado de categoría'} />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<Cart />}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
