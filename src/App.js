import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Chatlist from './components/Chatlist'
import Chatwindow from './components/Chatwindow'

function App() {
  // ToDo:
  // - Delay bei Antwort und tippen des Bots durch Animation der drei Punkte anzeigen
  // - Animation beim Laden der Antwort
  // - Textfeld kann nicht abgesendet werden wenn leer

  const [party, setParty] = useState('gruene')

  const handleClick = (party) => {
    console.log('handleClick im Parent')
    setParty(party)
  }

  return (
    <div className='App'>
      <div className='container wahlobot'>
        <Header></Header>

        <main className='row'>
          <Chatlist party={party} selectParty={handleClick}></Chatlist>
          <Chatwindow party={party}></Chatwindow>
        </main>
      </div>
    </div>
  )
}

export default App
