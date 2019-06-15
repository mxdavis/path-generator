import React from 'react'
import './App.css'
import { Instructions } from './components/Instructions'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Instructions />
      </header>
    </div>
  );
}

export default App;
