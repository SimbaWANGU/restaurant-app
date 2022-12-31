const register = async (username: string, email: string, password: string): Promise<void> => {
  await fetch('https://restaurant-server-twu5.onrender.com/auth/register', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: `username=${username}&email=${email}&password=${password}`
  })
    .then(async (res) => {
      const data = await res.json()
      localStorage.setItem('gericht-user', JSON.stringify(data))
    })
    .catch((err: Error) => {
      console.log(err)
      return {
        error: err.message
      }
    })
}

const login = async (username: string, password: string): Promise<void> => {
  await fetch('https://restaurant-server-twu5.onrender.com/auth/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: `username=${username}&password=${password}`
  })
    .then(async (res) => {
      const data = await res.json()
      localStorage.setItem('gericht-user', JSON.stringify(data))
    })
    .catch((err: Error) => {
      return {
        error: err.message
      }
    })
}

export { register, login }
