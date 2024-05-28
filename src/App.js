// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/Home';
import Product from './pages/Product'; // Import the Product component
import Navbar from './components/navbar';
import Login from './pages/login';
import Register from './pages/register';
import Navigation from './components/navigation';import './css/bootsnav.css';
import './css/bootsnav.css';
import './css/bootstrap.min.css.map';
import './css/font-icons.min.css';
import './css/responsive.css';
import './css/style.css';
import './css/theme-vendors.min.css';
function App() {
  return (
    <BrowserRouter> {/* Wrap the entire application with BrowserRouter */}
      <div className="App">
        {/* Component */}
        {/* <Navbar></Navbar> */}
        <Navigation></Navigation>
        {/* Route */}
        <Routes>  
            <Route path='/' element={<Home />} /> {/* Define your Route with the correct path and element */}
            <Route path='/product' element={<Product />} /> {/* Define your Route with the correct path and element */}
            <Route path='/login' element={<Login />} /> {/* Define your Route with the correct path and element */}
            <Route path='/register' element={<Register />} /> {/* Define your Route with the correct path and element */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
