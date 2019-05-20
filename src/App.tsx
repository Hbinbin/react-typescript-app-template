import React from 'react'
import './App.css'
import Hello from '@cps/Hello'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        Lying on the beach
        <Hello />
      </header>
    </div>
  )
}

export default App
