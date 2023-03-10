import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CartContextProvider } from './context/CartContext';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CartContainer from './components/CartContainer/CartContainer';

function App() {

  return (
    <div className="App">
      <>

        <BrowserRouter>
          <CartContextProvider>

            <NavBar />
            <Routes>

              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:idCategory' element={<ItemListContainer />} />
              <Route path='/detalle/:idProduct' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer/>} />
              <Route path='*' element={<Navigate to='/' />} />

            </Routes>

          </CartContextProvider>
        </BrowserRouter>

      </>
    </div>
  )
}

export default App
