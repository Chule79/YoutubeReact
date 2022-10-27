import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

function App() {
 
  return (
    <div className="App">
    <header><h1>YoutubeMemes</h1></header>
      <Nav/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App