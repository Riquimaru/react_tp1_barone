import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenido a mi tienda"} />}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={'Listado de categoría'} />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
