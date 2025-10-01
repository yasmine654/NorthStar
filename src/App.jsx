
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from './nav/NavBar.jsx'
import About from './About/About.jsx'
import Home from './Home/Home.jsx'
import Footer from './Footer/Footer.jsx';


function App() {
 

  return (

    <>
   <BrowserRouter>
    <NavBar/>
       <Routes>
       
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       
       </Routes>
    <Footer/>

       
   </BrowserRouter>

    </>
  )
}

export default App
