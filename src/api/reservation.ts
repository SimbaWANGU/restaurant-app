const makeReservation = async (username: string, date: string, time: string, guests: number, toast: any): Promise<void> => {
  await fetch('https://restaurant-server-twu5.onrender.com/reserve/create', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: `username=${username}&date=${date}&time=${time}&guests=${guests}`
  })
    .then(async (res) => {
      const data = await res.json()
      if (data.success === 'Resevation has been created') {
        toast.success(data.success)
      } else if (data.error === 'An error occurred' || data.error === 'Incomplete Reservation') {
        toast.error(data.error)
      }
    })
    .catch((err) => {
      console.log(err.message)
      toast.error('An error occurred')
    })
}

const getReservation = async (callback: any): Promise<void> => {
  const user = JSON.parse(localStorage.getItem('gericht-user') as string)
  await fetch(`https://restaurant-server-twu5.onrender.com/reserve/${user.username as string}`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })
    .then(async (res) => {
      const data = await res.json()
      callback(data.myReservations)
    })
    .catch(() => {})
}

export { makeReservation, getReservation }
