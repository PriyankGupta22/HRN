import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/Hero'
import NewCollection from './components/NewCollection'
import ColdSection from './components/ColdSection'

function App() {

  return (
    <div>
      <Hero />
      <NewCollection />
      <ColdSection />
    </div>
  )
}

export default App
