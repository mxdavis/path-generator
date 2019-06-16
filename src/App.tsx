import React from 'react'
import './App.css'
import { Form } from './components/Form'
import { Instructions } from './components/Instructions'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <Instructions />
        <Form />
      </header>
    </div>
  )
}

export default App
