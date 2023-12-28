
import './App.css';
import {Routes,Route }from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Siignup from './components/signup/Siignup';
import Create from './components/create/Create';
import  FoodCatalog from './components/foodCatalog/FoodCatalog';
import  FoodDteails from './components/foodDetails/FoodDetails';
import  Checkouts from './components/checkouts/Checkouts';
import  Foods from './components/foods/Foods';
import Cart from './components/cart/Cart';
import Newsletter from './components/newsletter/Newsletter';
import {useLocation} from 'react-router-dom'
import {useEffect} from 'react'

function App() {
  const location=useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)

  },[location.pathname])
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Siignup/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/food/:id' element={< FoodDteails/>}/>
        <Route path='/foods' element={<Foods/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkouts' element={<Checkouts/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/foods/:id' element={<FoodCatalog/>}/>
        <Route path='/contacts' element={<Newsletter/>}/>
      


      </Routes>
      <Footer/>
   
    </div>
  );
}

export default App;
