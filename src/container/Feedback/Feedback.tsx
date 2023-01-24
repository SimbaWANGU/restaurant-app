import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import './Feedback.scss'
import { useQuery } from 'react-query'
import { getFeedback } from '../../api/feedback'
import { toast, ToastContainer } from 'react-toastify'
import SubHeading from '../../components/SubHeading/SubHeading'

interface FeedbackProps {
  handleOpenFeedbackModal: any
}

interface Feedbacks {
  _id: string
  username: string
  emoji: string
  feedback: string
}

const Feedback: React.FC<FeedbackProps> = ({ handleOpenFeedbackModal }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    const handleResize = (): void => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    screenWidth <= 650
      ? (setSlidesPerView(2))
      : (setSlidesPerView(3))
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [screenWidth])

  const { data, status } = useQuery('feedbacks', async () => {
    return await getFeedback()
  })

  if (status === 'loading') {
    return (
      <div className='empty-reservations'>
        <h1>
          Please wait...
        </h1>
      </div>
    )
  }

  if (status === 'error') {
    toast.error('An error occurred. Please try again...', {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: 'light'
    })

    return (
      <div className='empty-reservations'>
        <h1>
          Cannot retrieve your reservations at this time
        </h1>
        <ToastContainer />
      </div>
    )
  }

  return (
    <div id='feedback' className='feedback-container'>
      <SubHeading title='Reviews' />
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true
        }}
        modules={[Autoplay]}
      >
        {data.length === 0
          ? (
            <></>
            )
          : (
              data.map((item: Feedbacks) => (
              <SwiperSlide key={item._id}>
                <div className='slide-container' data-aos="flip-up">
                  <p>{item.emoji}</p>
                  <p>{item.feedback}</p>
                  <p>{item.username}</p>
                </div>
              </SwiperSlide>
              ))
            )
        }
        <SwiperSlide>
          <div className='slide-container' data-aos="flip-up">
            <p>😀</p>
            <p>I loved their service, they were very considerate and their food is amazing</p>
            <p>Simberella</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='button-area'>
        <button onClick={handleOpenFeedbackModal}>Add Feeback</button>
      </div>
    </div>
  )
}

export default Feedback
