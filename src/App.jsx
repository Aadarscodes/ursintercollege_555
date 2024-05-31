import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel.jsx';
import { slides } from "./data/carouselData.json";

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <Header/>
       <Navbar></Navbar>
       <Footer></Footer>
    </div>

    
  )
}

export default App
