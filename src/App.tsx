import React, { ReactElement } from 'react'
import { AboutUs, Header } from './container'
import { Navbar } from './components'

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
