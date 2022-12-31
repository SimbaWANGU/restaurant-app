import React, { ReactElement, useEffect, useState } from 'react'
import './App.scss'
import Modal from 'react-modal'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './container/AboutUs/AboutUs'
import Chef from './container/Chef/Chef'
import Header from './container/Header/Header'
import Menu from './container/Menu/Menu'
import Authenticate from './container/Authenticate/Authenticate'

const App = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const body = document.body

    if (isOpen) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }

    return () => {
      body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleClick = (event: React.MouseEvent): void => {
    event.preventDefault()
    setIsOpen(true)
  }

  const customStyles = {
    content: {
      background: 'black',
      color: 'white'
    }
  }

  Modal.setAppElement('#root')

  return (
    <div className="App">
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <Authenticate />
      </Modal>
      <Navbar handleClick={handleClick} />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
    </div>
  )
}

export default App
