import {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/NavBar';
import Home from './Home.jsx';
import Precheckout from './Prechekout.jsx';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
   useEffect(() => {
    AOS.init({
      duration: 800, // duração da animação em ms
      once: false, 
    });
  }, []);
  
  return (
    <>
    <div className='m-w-[100vw] w-[100%] relative'>
    < Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/prechekout" element={<Precheckout/>} />
        
      </Routes>
    </div>
    </>
  )
}

export default App
