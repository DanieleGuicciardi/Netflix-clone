import { useState } from 'react'
import './App.css'
import NetflixNavbar from './assets/components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NetflixNavbar/>
    </>
  );
}

export default App
