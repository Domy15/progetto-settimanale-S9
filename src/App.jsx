import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import NavBar from './components/NavBar'
import Footer from "./components/Footer"
import Hero from './components/Hero'
import Gallery from './components/Gallery'

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Gallery title="Trending Now" film="harry potter"/>
      <Gallery title="Watch it Again" film="star wars"/>
      <Gallery title="New Releases" film="the lord of the rings"/>
      <Footer/>
    </>
  )
}

export default App
