import React, { ReactElement } from 'react'
import meal from './../../assets/meal.mp4'
import './Video.scss'

const Video = (): ReactElement => {
  return (
    <div className='video-container'>
      <video
        className='video'
        controls
        autoPlay={true}
        src={meal}
        loop={true}
      ></video>
    </div>
  )
}

export default Video
