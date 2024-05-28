import { useState } from 'react'
import './App.css'
import Header from './Components/header';
import Navbar from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <Header/>
       <Navbar></Navbar>
    </div>
  )
}

export default App
