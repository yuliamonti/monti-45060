import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header';
import Main from './components/main/Main';
import { Footer } from './components/footer/Footer';
import ItemListContainer from './components/cart/ItemListContainer';
import ItemDetailContainer from './components/cart/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/header" element={<Header />} />
        <Route path="/main" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

