import { useState } from 'react'
import './App.css'

import NetflixNavbar from './assets/components/Navbar.jsx'
import Footer from './assets/components/Footer.jsx'
import MovieRow from './assets/components/FilmGallery.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NetflixNavbar/>
      <h3>Trending Now</h3>
      <MovieRow/>
      <h3>Watch it Again</h3>
      <MovieRow/>
      <h3>New Releases</h3>
      <MovieRow/>
      <Footer/>
    </>
  );
}

export default App
