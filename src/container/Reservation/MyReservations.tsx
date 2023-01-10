import React, { ReactElement } from 'react'
import { useQuery } from 'react-query'
import { ToastContainer, toast } from 'react-toastify'
import { getReservation } from '../../api/reservation'
import './MyReservations.scss'

interface Reservations {
  _id: string
  username: string
  date: string
  time: string
  guests: number
  completed: boolean
}

const MyReservations = (): ReactElement => {
  const { isLoading, data } = useQuery('reservations', async () => {
    return await getReservation()
  })

  if (isLoading) {
    return (
      <div className='empty-reservations'>
        <h1>
          Please wait while we get your reservations...
        </h1>
      </div>
    )
  }

  return (
    <>
      {data.length === 0
        ? (
          <div className='empty-reservations'>
            <h1>
              You haven&apos;t made any Reservations yet
            </h1>
          </div>
          )
        : (
          <div className='myreservations-container'>
            {data.map((item: Reservations) => (
              <div data-aos="flip-up" key={item._id}>
                <p>{item.date}</p>
                <p>{item.time} HRS</p>
                <p>Number of Guests expected: {item.guests}</p>
              </div>
            ))}
          </div>
          )
      }
      <ToastContainer />
    </>
  )
}

export default MyReservations
