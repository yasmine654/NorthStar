
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from './nav/NavBar.jsx'
import About from './About/About.jsx'
import Home from './Home/Home.jsx'
import Footer from './Footer/Footer.jsx';
import { ContextProvider } from './Context/Context.jsx';
import CartPage from './CartPage/CartPage.jsx';
import Contact from './Contact/Contact.jsx'



function App() {
 

  return (

    <>
   <BrowserRouter>
   <ContextProvider>
    <NavBar/>
    <CartPage/>
       <Routes>
       
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       
       
       
       </Routes>
       <Footer/>

       </ContextProvider>
   </BrowserRouter>

    </>
  )
}

export default App
