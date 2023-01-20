import React, { ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import './Feedback.scss'

const Feedback = (): ReactElement => {
  return (
    <div className='feedback-container'>
      <h2>Reviews</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
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
    </div>
  )
}

export default Feedback
