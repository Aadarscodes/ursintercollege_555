
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel.jsx';
import { slides } from "./data/carouselData.json";
import './Components/home.css';
import "./Components/noticeboard.css";
import AnnouncementsAndDates from './Components/noticeboard.jsx';
import HomeCantaint from './Components/home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <Header/> <br /> 
       <Navbar></Navbar>
       <div className="Apps">
      <Carousel data={slides} />
    </div>
    <div className='Notice'><AnnouncementsAndDates /></div>
    <div className='Cantainerhome'> <HomeCantaint/>
      </div>
    
    <br />
  
       <div><Footer></Footer></div>
      
    </div>
  )
}

export default App;


