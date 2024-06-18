import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Components/Carousel.jsx';
import { slides } from "./data/carouselData.json";
import './Components/home.css';
import HomeCantaint from './Components/home.jsx';
import MainLayout from './Layout/MainLayout.jsx';
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
  const location = useLocation();

  let footerClass = '';
  if (location.pathname === '/') {
    footerClass = ' footer-home';
  } else if (location.pathname === '/contact') {
    footerClass = ' footer-contact';
  }

  return (

    <MainLayout>
      <div>
       <div className="Apps">
      <Carousel data={slides} />
    </div>
      <HomeCantaint/>
      </div>
    </MainLayout>
  )
}

export default App;
    
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
  
       <div><Footer className={footerClass}></Footer></div>
      
    </div>
  )
}

export default App;


