import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import { Notification, NotificationProvider } from './notification/Notification';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <NotificationProvider>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenido a mi tienda"} />}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={'Listado de categoría'} />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
      </NotificationProvider>
    </div>
  );
}

export default App;
