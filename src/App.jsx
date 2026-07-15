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

function App() {
  return (
    <div>
       <header>Hello GrowthLift!</header>,
      <div>
        <Card
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
    <SkillLists />
    </div>
  );
}
export default App
