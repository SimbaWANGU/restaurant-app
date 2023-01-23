import React, { FormEvent, ReactElement, useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { toast, ToastContainer } from 'react-toastify'
import { giveFeedback } from '../../api/feedback'
import './FeedbackForm.scss'

const options = ['😀', '😊', '😐', '😔', '😭']

const FeedbackForm = (): ReactElement => {
  const [emoji, setEmoji] = useState('')
  const [feedback, setFeedback] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('gericht-user') as string)
    setUsername(user.username)
  }, [])

  const creatingFeedback = async (): Promise<void> => {
    await giveFeedback(username, emoji, feedback)
    setEmoji('')
    setFeedback('')
  }

  const useAddFeedback = (): any => {
    const queryClient = useQueryClient()
    return useMutation(creatingFeedback, {
      onSuccess: async () => {
        await queryClient.invalidateQueries('feedbacks')
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      }
    })
  }

  const { mutate: addFeedbacksToDb } = useAddFeedback()

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
    addFeedbacksToDb()
  }
  return (
    <div className='feedback-form-container'>
      <h2>Give us feedback...</h2>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <select
          name="emoji"
          size={options.length}
          value={emoji}
          onChange={(e) => { setEmoji(e.target.value) }}
          required
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <textarea
          name='feedback'
          placeholder='tell us more...'
          value={feedback}
          onChange={(e) => { setFeedback(e.target.value) }}
          maxLength={70}
          required
        />
        <input type='submit' value='Give Feedback'/>
      </form>
      <ToastContainer />
    </div>
  )
}

export default FeedbackForm
