import React, { ReactElement, useEffect, useState } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import './App.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Modal from 'react-modal'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './container/AboutUs/AboutUs'
import Chef from './container/Chef/Chef'
import Header from './container/Header/Header'
import Menu from './container/Menu/Menu'
import Authenticate from './container/Authenticate/Authenticate'
import Reservation from './container/Reservation/Reservation'
import MyReservations from './container/Reservation/MyReservations'
import Video from './container/Video/Video'
import Feedback from './container/Feedback/Feedback'
import FeedbackForm from './container/Feedback/FeedbackForm'
import Footer from './container/Footer/Footer'

// ! Complete App
// todo: Add footer
// todo: Add mobile and tablet versions
// todo: Add animations
// todo: Add menu

const queryClient = new QueryClient()

const App = (): ReactElement => {
  AOS.init({ duration: 1500, easing: 'ease-in-out', once: false })
  const [isAuthenticateModalOpen, setIsAuthenticateModalOpen] = useState(false)
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  const [isMyReservationModalOpen, setIsMyReservationModalOpen] = useState(false)
  const [isAddFeedbackModalOpen, setAddFeedbackModalOpen] = useState(false)

  useEffect(() => {
    const body = document.body

    if (isAuthenticateModalOpen || isReservationModalOpen || isMyReservationModalOpen || isAddFeedbackModalOpen) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }

    return () => {
      body.style.overflow = 'auto'
    }
  }, [isAuthenticateModalOpen, isReservationModalOpen, isMyReservationModalOpen, isAddFeedbackModalOpen])

  const handleOpenAuthenticationModal = (event: React.MouseEvent): void => {
    event.preventDefault()
    setIsAuthenticateModalOpen(true)
  }

  const handleOpenReservationModal = (event: React.MouseEvent): void => {
    event.preventDefault()
    setIsReservationModalOpen(true)
  }

  const handleOpenMyReservationsModal = (event: React.MouseEvent): void => {
    event.preventDefault()
    setIsMyReservationModalOpen(true)
  }

  const handleOpenFeedbackModal = (event: React.MouseEvent): void => {
    event.preventDefault()
    setAddFeedbackModalOpen(true)
  }

  const customStyles = {
    content: {
      margin: 'auto',
      width: '60%',
      background: 'black',
      color: 'white',
      overlay: {
        zIndex: '999'
      }
    }
  }

  const customStyles2 = {
    content: {
      margin: 'auto',
      width: '80%',
      background: 'black',
      color: 'white'
    }
  }

  Modal.setAppElement('#root')

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Modal
          isOpen={isAuthenticateModalOpen}
          onRequestClose={() => { setIsAuthenticateModalOpen(false) }}
          contentLabel="Authentication Modal"
          style={customStyles}
          >
          <Authenticate />
        </Modal>
        <Modal
          isOpen={isReservationModalOpen}
          onRequestClose={() => { setIsReservationModalOpen(false) }}
          contentLabel="Create Reservation Modal"
          style={customStyles}
        >
          <Reservation />
        </Modal>
        <Modal
          isOpen={isMyReservationModalOpen}
          onRequestClose={() => { setIsMyReservationModalOpen(false) }}
          contentLabel="My Reservations Modal"
          style={customStyles2}
          >
          <MyReservations />
        </Modal>
        <Modal
          isOpen={isAddFeedbackModalOpen}
          onRequestClose={() => { setAddFeedbackModalOpen(false) }}
          contentLabel='Add Feedback Modal'
          style={customStyles2}
        >
          <FeedbackForm />
        </Modal>
        <Navbar
          handleOpenAuthenticationModal={handleOpenAuthenticationModal}
          handleOpenMyReservationsModal={handleOpenMyReservationsModal}
          setIsMyReservationModalOpen={setIsMyReservationModalOpen}
          />
        <Header
          handleOpenReservationModal={handleOpenReservationModal}
          handleOpenAuthenticationModal={handleOpenAuthenticationModal}
          />
        <AboutUs />
        <Menu />
        <Chef />
        <Video />
        <Feedback
          handleOpenFeedbackModal={handleOpenFeedbackModal}
        />
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App
