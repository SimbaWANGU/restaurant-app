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
      console.log(data)
      return data
    })
    .then((res) => {
      const data = res
      console.log(data)
      return data
    })
    .catch((err) => {
      console.log(err)
      return {
        error: 'An error occurred'
      }
    })
}

export { register }
