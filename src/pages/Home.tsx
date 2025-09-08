
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/AboutComponent'
import Footer from '../components/Footer'      
import TechGarden from '../components/TechGarden'
      

function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <TechGarden />
        <Footer />
    </>
  )
}

export default Home;