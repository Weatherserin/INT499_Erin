import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import './styles/App.css';

const App = () => (
  <div
    style={{
      minHeight: "100vh",
      backgroundImage: "url('/assets/TEXTURE_3.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  >
    {/* Example: Add a logo or banner at the top */}
    <img 
      src="/assets/logo.svg" 
      alt="Description" 
      style={{ width: '300px', margin: '2rem auto', display: 'block' }} 
      />
    <Router>
      <Menu />
      <div className="main-content">
        <Routes>
          <Route path="/streamlist" element={<StreamList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  </div>
);

export default App;
