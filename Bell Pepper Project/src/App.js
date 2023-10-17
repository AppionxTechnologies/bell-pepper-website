
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/home';
import Menu from './pages/Menu/lunchbox';
import Menu_detail from './pages/Menu/menu_detail';
import Navbar from './navbar';
import Footer from './footer';


function App() {
  return (
   <>
     <BrowserRouter>
   <div className='App'> 

         <Navbar />
         
   </div>
   <div className=""></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu-detail" element={<Menu_detail />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
         </>
  );
}

export default App;
