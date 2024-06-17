import { useState } from 'react'
import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Components/Carousel.jsx';
import { slides } from "./data/carouselData.json";
import './Components/home.css';
import HomeCantaint from './Components/home.jsx';
import MainLayout from './Layout/MainLayout.jsx';

function App() {
  const [count, setCount] = useState(0)

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