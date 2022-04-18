import React from 'react'
import { Navbar } from './components'
import './index.css'
import { About, Hero, Skills, Projects, Contact } from './pages'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
