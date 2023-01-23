import React, { FormEvent, ReactElement, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import './FeedbackForm.scss'

const options = ['😀', '😊', '😐', '😔', '😭']

const FeedbackForm = (): ReactElement => {
  const [emoji, setEmoji] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    toast.info('Giving Feeback. Please wait...', {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      toastId: 'giveFeedbackToast'
    })
    console.log(emoji, feedback)
  }
  return (
    <div className='feedback-form-container'>
      <h2>Give us feedback...</h2>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <select name="emoji" size={options.length} value={emoji} onChange={(e) => { setEmoji(e.target.value) }}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <textarea name='feedback' placeholder='tell us more...' value={feedback} onChange={(e) => { setFeedback(e.target.value) }} />
        <input type='submit' value='Give Feedback'/>
      </form>
      <ToastContainer />
    </div>
  )
}

export default FeedbackForm
