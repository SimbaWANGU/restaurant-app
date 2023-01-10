const makeReservation = async (username: string, date: string, time: string, guests: number, toast: any): Promise<any> => {
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
        toast.success(data.success)
      } else if (data.error === 'An error occurred' || data.error === 'Incomplete Reservation') {
        toast.error(data.error)
      }
      break
    case 500:
      return 'Error'
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
      return data.myReservations
      // if (data.success === 'Resevation has been created') {
      //   toast.success(data.success)
      // } else if (data.error === 'An error occurred' || data.error === 'Incomplete Reservation') {
      //   toast.error(data.error)
      // }
    case 500:
      return 'Error'
  }
}

export { makeReservation, getReservation }
