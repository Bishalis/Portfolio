import { motion } from 'framer-motion'
import Navbar from './Components/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { ThemeProvider } from './utils/ThemeContext'
import { ThemeToggle } from './Components/ThemeToggle'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
