import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
      if (data.message === 'You have created a new account') {
        toast.update('createUserToast', {
          autoClose: 5000,
          render: data.success,
          type: toast.TYPE.SUCCESS,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
        localStorage.setItem('gericht-user', JSON.stringify(data))
      } else {
        toast.update('createUserToast', {
          autoClose: 5000,
          render: 'An error occurred',
          type: toast.TYPE.ERROR,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
      }
      break
    case 400:
      toast.update('createUserToast', {
        render: 'You don&apos;t have access',
        autoClose: 5000,
        type: toast.TYPE.ERROR,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      break
    case 500:
      toast.update('createUserToast', {
        autoClose: 5000,
        render: 'An error occurred',
        type: toast.TYPE.ERROR,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
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
      if (data.message === 'You have access') {
        toast.update('loginUserToast', {
          autoClose: 5000,
          render: data.message,
          type: toast.TYPE.SUCCESS,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
        localStorage.setItem('gericht-user', JSON.stringify(data))
      } else {
        toast.update('loginUserToast', {
          autoClose: 5000,
          render: 'An error occurred',
          type: toast.TYPE.ERROR,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
      }
      break
    case 400:
      toast.update('loginUserToast', {
        render: 'You don&apos;t have access',
        autoClose: 5000,
        type: toast.TYPE.ERROR,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      break
    case 500:
      toast.update('loginUserToast', {
        render: 'An error occurred, this is not your fault',
        autoClose: 5000,
        type: toast.TYPE.ERROR,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      break
  }
}

const logout = async (): Promise<any> => {
  const response = await fetch('https://restaurant-server-twu5.onrender.com/auth/logout', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })
  let data
  switch (response.status) {
    case 200:
      data = await response.json()
      if (data.message === 'You have been logged out') {
        toast.update('logOutUserToast', {
          autoClose: 5000,
          render: data.message,
          type: toast.TYPE.SUCCESS,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
      } else {
        toast.update('logOutUserToast', {
          autoClose: 5000,
          render: 'An error occurred',
          type: toast.TYPE.ERROR,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
      }
      break
    case 400:
      toast.update('logOutUserToast', {
        render: 'You don&apos;t have access',
        autoClose: 5000,
        type: toast.TYPE.ERROR,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      break
    case 500:
      toast.update('logOutUserToast', {
        render: 'An error occurred, this is not your fault',
        autoClose: 5000,
        type: toast.TYPE.ERROR,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      break
  }
}

export { register, login, logout }
