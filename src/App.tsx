import React, { ReactElement } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './container/AboutUs/AboutUs'
import Header from './container/Header/Header'

const App = (): ReactElement => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  )
}

export default App
