import { useEffect } from 'react';
import './App.css'
import AOS from "aos";
import 'aos/dist/aos.css';
import Navigation from './components/Navigation'
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(()=>{
    AOS.init();
  })

  return (
   <div className=''>
     <Navigation />
     <Hero />
     <About />
     <Services />
     <Portfolio />
     <Contact />
     <Footer />
   </div>
  )
}

export default App
