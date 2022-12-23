import React, { ReactElement } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './container/AboutUs/AboutUs'
import Chef from './container/Chef/Chef'
import Header from './container/Header/Header'
import Menu from './container/Menu/Menu'

const App = (): ReactElement => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
    </div>
  )
}

export default App
