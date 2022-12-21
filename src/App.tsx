import React, { ReactElement } from 'react'
import { Header } from './container'
import { Navbar } from './components'
import './App.scss'

const App = (): ReactElement => {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  )
}

export default App
