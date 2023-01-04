import React, { ReactElement, createRef, FormEvent } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { makeReservation } from '../../api/reservation'
import './Reservation.scss'

const Reservation = (): ReactElement => {
  const dateRef = createRef<HTMLInputElement>()
  const timeRef = createRef<HTMLInputElement>()
  const guestsRef = createRef<HTMLInputElement>()
  let username = ''

  const resetRef = (): void => {
    (dateRef.current as HTMLInputElement).value = '';
    (timeRef.current as HTMLInputElement).value = '';
    (guestsRef.current as HTMLInputElement).value = ''
  }

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    const date = dateRef.current?.value as string
    const time = timeRef.current?.value as string
    const guests = guestsRef.current?.value as string
    const user = JSON.parse(localStorage.getItem('gericht-user') as string)
    username = user.username

    resetRef()

    toast('Creating Reservation...', {
      icon: '🕐'
    })
    makeReservation(username, date, time, Number(guests), toast)
      .then(() => {
        window.location.reload()
      })
      .catch(() => {})
  }

  return (
    <div className='authenticate-modal'>
      <Toaster />
      <div className='formArea'>
        <h2>Make Your Reservation</h2>
        <div className='formReservation'>
          <form onSubmit={(e) => { handleSubmit(e) }}>
            <input
              type='date'
              name='date'
              ref={dateRef}
              required
            />
            <input
              type='time'
              name='time'
              ref={timeRef}
              required
            />
            <input
              type='number'
              name='guests'
              placeholder='Number of guests...'
              ref={guestsRef}
              required
            />
            <input
              type='submit'
              value='Book Reservation'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reservation
