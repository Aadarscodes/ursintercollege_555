import { useState } from 'react'
import './App.css'
import Header from './Components/header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <Header/>
      <Navbar/>
       <Footer></Footer>
    </div>

    
  )
}

export default App
