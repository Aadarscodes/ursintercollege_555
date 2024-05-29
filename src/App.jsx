import { useState } from 'react'
import './App.css'
import Header from './Components/header';
import Navbar from './Components/Navbar';
<<<<<<< HEAD
import Footer from './Components/footer';
=======
import Footer from './Components/Footer';
>>>>>>> 32d238876570406c542f8b6b262338747061bda7

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <Header/>
<<<<<<< HEAD
      <Navbar/>
      <Footer/>
=======
       <Navbar></Navbar>
       <Footer></Footer>
>>>>>>> 32d238876570406c542f8b6b262338747061bda7
    </div>

    
  )
}

export default App
