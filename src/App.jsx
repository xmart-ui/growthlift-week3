import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import header from './components/Header'
import Card from './components/Card' 
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import './App.css'
import Quotebox from './components/Quotebox'
import SkillLists from './components/SkillLists'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>

    {/* <header>Hello GrowthLift!</header> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      {/* <div> */}
        {/* <Card
        title="React"
        description="JS library for UIs"
        color="#A78BFA"
      />,

      <Card
        title="Vite"
        description="Fast build tool"
        color="#00C864"
      />,

      <Card
        title="Tailwind"
        description="Utility-first CSS"
        color="#00B4D8"
      />
    </div>

   
    <Counter />
    <Toggle />
    <Quotebox />
    <SkillLists /> */}
    {/* <Home />
    <About />
    <Projects />
    <Contact /> */}
    </div>
  );
}
export default App
