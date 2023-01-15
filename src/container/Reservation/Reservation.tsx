import React, { ReactElement, FormEvent, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useMutation, useQueryClient } from 'react-query'
import { makeReservation } from '../../api/reservation'
import './Reservation.scss'

const Reservation = (): ReactElement => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState<number>()
  const [username, setUsername] = useState('')

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('gericht-user') as string)
    setUsername(user.username)
  }, [])

  const creatingReservation = async (): Promise<void> => {
    await makeReservation(username, date, time, guests as number)
    setDate('')
    setTime('')
    setDate('')
  }

  const useAddReservation = (): any => {
    const queryClient = useQueryClient()
    return useMutation(creatingReservation, {
      onSuccess: async () => {
        await queryClient.invalidateQueries('reservations')
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      }
    })
  }

  const { mutate: addReservationToDb } = useAddReservation()

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    toast.info('Creating your reservation. Please wait...', {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      toastId: 'createReservationToast'
    })
    addReservationToDb()
  }

  return (
    <div className='authenticate-modal'>
      <div className='formArea'>
        <h2>Make Your Reservation</h2>
        <div className='formReservation'>
          <form onSubmit={(e) => { handleSubmit(e) }}>
            <input
              type='date'
              name='date'
              value={date}
              onChange={(e) => { setDate(e.target.value) }}
              required
            />
            <input
              type='time'
              name='time'
              value={time}
              onChange={(e) => { setTime(e.target.value) }}
              required
            />
            <input
              type='number'
              name='guests'
              placeholder='Number of guests...'
              value={guests}
              onChange={(e) => { setGuests(Number(e.target.value)) }}
              required
            />
            <input
              type='submit'
              value='Book Reservation'
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Reservation
