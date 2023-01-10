const register = async (username: string, email: string, password: string): Promise<any> => {
  const response = await fetch('https://restaurant-server-twu5.onrender.com/auth/register', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: `username=${username}&email=${email}&password=${password}`
  })
  let data
  switch (response.status) {
    case 200:
      data = await response.json()
      localStorage.setItem('gericht-user', JSON.stringify(data))
      return data.message
    case 500:
      return 'Error'
  }
}

const login = async (username: string, password: string): Promise<any> => {
  const response = await fetch('https://restaurant-server-twu5.onrender.com/auth/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: `username=${username}&password=${password}`
  })
  let data
  switch (response.status) {
    case 200:
      data = await response.json()
      localStorage.setItem('gericht-user', JSON.stringify(data))
      return data.message
    case 500:
      return 'Error'
  }
}

export { register, login }
