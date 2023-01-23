import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import './Feedback.scss'

interface FeedbackProps {
  handleOpenFeedbackModal: any
}

const Feedback: React.FC<FeedbackProps> = ({ handleOpenFeedbackModal }) => {
  return (
    <div className='feedback-container'>
      <h2>Reviews</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className='slide-container' data-aos="flip-up">
            <p>😀</p>
            <p>I loved their service, they were very considerate and their food is amazing</p>
            <p>by <span>Simberella</span></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-container' data-aos="flip-up">
            <p>😀</p>
            <p>I loved their service, they were very considerate and their food is amazing</p>
            <p>by <span>Simberella</span></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-container' data-aos="flip-up">
            <p>😀</p>
            <p>I loved their service, they were very considerate and their food is amazing</p>
            <p>by <span>Simberella</span></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-container' data-aos="flip-up">
            <p>😀</p>
            <p>I loved their service, they were very considerate and their food is amazing</p>
            <p>by <span>Simberella</span></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-container' data-aos="flip-up">
            <p>😀</p>
            <p>I loved their service, they were very considerate and their food is amazing</p>
            <p>by <span>Simberella</span></p>
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
