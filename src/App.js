
import './App.css';

import Footer from './components/Navbar/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Navbar/Header';
import Detailproduct from './components/Navbar/Detailproduct';
import SlileShop from './components/Shop/slileShop';
import Home from './components/Navbar/Home';
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';
import Introduce from './components/Navbar/Introduce';
import Shop from './components/Shop/Shop';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: '200px' }}><Header /></div>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path="/Detailsproduct/:id" element={<Detailproduct />}></Route>
        <Route path="/category/:name" element={<SlileShop />} ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/Introduce" element={<Introduce />}></Route>
        <Route path='/login' element={<Login />} />
      </Routes>
      <div><Footer /></div>
    </div>
  );
}

export default App;
