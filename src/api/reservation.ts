import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const makeReservation = async (username: string, date: string, time: string, guests: number): Promise<any> => {
  const response = await fetch('https://restaurant-server-twu5.onrender.com/reserve/create', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: `username=${username}&date=${date}&time=${time}&guests=${guests}`
  })
  let data
  switch (response.status) {
    case 200:
      data = await response.json()
      if (data.success === 'Resevation has been created') {
        toast.update('createReservationToast', {
          autoClose: 5000,
          render: data.success,
          type: toast.TYPE.SUCCESS,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        })
      } else if (data.error === 'An error occurred' || data.error === 'Incomplete Reservation') {
        toast.update('createReservationToast', {
          autoClose: 5000,
          render: data.error,
          type: toast.TYPE.SUCCESS,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        })
      }
      break
    case 400:
      toast.update('createReservationToast', {
        render: 'You don&apos;t have access',
        autoClose: 5000,
        type: toast.TYPE.ERROR,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
      break
    case 500:
      toast.update('createReservationToast', {
        render: 'An error occurred, this is not your fault',
        autoClose: 5000,
        type: toast.TYPE.ERROR,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
      break
  }
}

const getReservation = async (): Promise<any> => {
  const user = JSON.parse(localStorage.getItem('gericht-user') as string)
  const response = await fetch(`https://restaurant-server-twu5.onrender.com/reserve/${user.username as string}`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })
  let data
  switch (response.status) {
    case 200:
      data = await response.json()
      if (data.myReservations.length > 0) {
        toast.success('Gotten your reservations', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        })
      } else {
        toast.success('You don&apos;t have any reservations yet...', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        })
      }
      return data.myReservations
    case 400:
      toast.error('You don&apos;t have access', {
        position: 'top-center',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
      break
    case 500:
      toast.error('An error occurred, this is not your fault', {
        position: 'top-center',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
      break
  }
}

export { makeReservation, getReservation }
