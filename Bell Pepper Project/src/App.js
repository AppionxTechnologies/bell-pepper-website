
import './App.css';
import Banner from './banner';
import Home from './pages/Home/home';
import Navbar from './navbar';
import Footer from './footer';



function App() {
  return (
   <>
   <div className='App'> 

         <Navbar />
         <Home/>
         <Banner/>
         <Footer/>
   </div>
         
         </>
  );
}

export default App;
