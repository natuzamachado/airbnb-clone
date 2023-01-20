import React from 'react'
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Card from "../components/Card"
import data from './data'

function App() {
  const cardsInfo = data.map(info => 
   <Card 
     key = {info.id}
     {...info}
    />
  )
  return (
    <div className="App">
        <Nav />
        <Hero />
        <div className='cards'>{cardsInfo}</div>
    </div>
  )
}

export default App
