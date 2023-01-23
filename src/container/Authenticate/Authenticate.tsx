import React, { ReactElement, createRef, useState, FormEvent } from 'react'
import { useMutation } from 'react-query'
import { ToastContainer, toast } from 'react-toastify'
import { login, register } from '../../api/authentication'
import './Authenticate.scss'

const Authenticate = (): ReactElement => {
  const [isRegistering, setIsRegistering] = useState(true)
  const [nameRegister, setNameRegister] = useState('')
  const [emailRegister, setEmailRegister] = useState('')
  const [passwordRegister, setPasswordRegister] = useState('')
  const [nameLogin, setNameLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  const registerButtonRef = createRef<HTMLButtonElement>()
  const loginButtonRef = createRef<HTMLButtonElement>()

  const handleRegisterButtonClick = (): void => {
    setIsRegistering(true)
    registerButtonRef.current?.classList.add('active')
    loginButtonRef.current?.classList.remove('active')
  }

  const handleLoginButtonClick = (): void => {
    setIsRegistering(false)
    registerButtonRef.current?.classList.remove('active')
    loginButtonRef.current?.classList.add('active')
  }

  const registeringUser = async (): Promise<void> => {
    await register(nameRegister, emailRegister, passwordRegister)
    setNameRegister('')
    setEmailRegister('')
    setPasswordRegister('')
  }

  const loginUser = async (): Promise<void> => {
    await login(nameLogin, passwordLogin)
    setNameLogin('')
    setPasswordLogin('')
  }

  const useAddRegisteration = (): any => {
    return useMutation(registeringUser, {
      onSuccess: async () => {
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      }
    })
  }

  const useAddLogin = (): any => {
    return useMutation(loginUser, {
      onSuccess: async () => {
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      }
    })
  }

  const { mutate: registerUserToDb } = useAddRegisteration()
  const { mutate: loginUserToDb } = useAddLogin()

  const handleRegistration = (e: FormEvent): void => {
    e.preventDefault()
    toast.info('Creating new client, Please wait...', {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      toastId: 'createUserToast'
    })
    registerUserToDb()
  }

  const handleLogin = (e: FormEvent): void => {
    e.preventDefault()
    toast.info('Logging In, Please wait...', {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      toastId: 'loginUserToast'
    })
    loginUserToDb()
  }

  return (
    <div className='authenticate-modal'>
      <div className='formArea'>
        <h2>Register or Login to make a Reservation</h2>
        <div className='buttonArea'>
          <button className='active' ref={registerButtonRef} onClick={() => { handleRegisterButtonClick() }}>Register</button>
          <button ref={loginButtonRef} onClick={() => { handleLoginButtonClick() }}>Login</button>
        </div>

        {(isRegistering)
          ? <div className='formRegister'>
          <form onSubmit={(e) => { handleRegistration(e) }}>
            <input
              type='text'
              name='username'
              placeholder='Enter Username...'
              value={nameRegister}
              onChange={(e) => { setNameRegister(e.target.value) }}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Enter Email...'
              value={emailRegister}
              onChange={(e) => { setEmailRegister(e.target.value) }}
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Enter Password...'
              value={passwordRegister}
              onChange={(e) => { setPasswordRegister(e.target.value) }}
              required
            />
            <input
              type='submit'
              value='Register'
            />
          </form>
        </div>
          : <div className='formLogin'>
          <form onSubmit={(e) => { handleLogin(e) }}>
            <input
              type='text'
              name='username'
              placeholder='Enter Username...'
              value={nameLogin}
              onChange={(e) => { setNameLogin(e.target.value) }}
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Enter Password...'
              value={passwordLogin}
              onChange={(e) => { setPasswordLogin(e.target.value) }}
              required
            />
            <input
              type='submit'
              value='Login'
            />
          </form>
        </div>
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default Authenticate
