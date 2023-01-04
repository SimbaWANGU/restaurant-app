import React, { ReactElement, useEffect, useState } from 'react'
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
  const [myReservations, setReservations] = useState(Array<Reservations>)
  useEffect(() => {
    if (myReservations.length === 0) {
      getReservation((data: Reservations[]) => { setReservations(data) })
        .then(() => {})
        .catch(() => {})
    }
  }, [])

  return (
    <>
      {myReservations.length === 0
        ? (
          <div className='empty-reservations'>
            <h1>
              You haven&apos;t made any Reservations yet
            </h1>
          </div>
          )
        : (
          <div className='myreservations-container'>
            {myReservations.map(item => (
              <div data-aos="flip-up" key={item._id}>
                <p>{item.date}</p>
                <p>{item.time} HRS</p>
                <p>Number of Guests expected: {item.guests}</p>
              </div>
            ))}
          </div>
          )
      }
    </>
  )
}

export default MyReservations
