import { useState } from 'react'
import './App.css'

import NetflixNavbar from './assets/components/Navbar.jsx'
import Footer from './assets/components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NetflixNavbar/>
      <Footer/>
    </>
  );
}

export default App
