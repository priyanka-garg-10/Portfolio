import styles from './App.module.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skiils/Skills'
import Work from './components/Work/Work';
import Getintouch from './components/Getintouch/Getintouch'
function App() {

  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Work />
    <Getintouch />
  </div>

}

export default App
