import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import { Footer } from './components/footer/Footer';
import Cart from './components/cart/Cart';
import Notfound from './components/error/notfound';
import Form from './components/form/Form';
import CartProvider from './context/cartContext';
import './App.css'
import Hero from './components/main/hero';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Form />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;