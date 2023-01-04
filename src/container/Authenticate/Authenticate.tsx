import React, { ReactElement, createRef, useState, FormEvent } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { login, register } from '../../api/authentication'
import './Authenticate.scss'

const Authenticate = (): ReactElement => {
  const [isRegistering, setIsRegistering] = useState(true)
  const nameRef = createRef<HTMLInputElement>()
  const emailRef = createRef<HTMLInputElement>()
  const passRef = createRef<HTMLInputElement>()
  const nameRefLogin = createRef<HTMLInputElement>()
  const passRefLogin = createRef<HTMLInputElement>()
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

  const resetRef = (): void => {
    (nameRef.current as HTMLInputElement).value = '';
    (emailRef.current as HTMLInputElement).value = '';
    (passRef.current as HTMLInputElement).value = ''
  }

  const resetRefLogin = (): void => {
    (nameRefLogin.current as HTMLInputElement).value = '';
    (passRefLogin.current as HTMLInputElement).value = ''
  }

  const handleRegistration = (e: FormEvent): void => {
    e.preventDefault()
    const username = nameRef.current?.value as string
    const email = emailRef.current?.value as string
    const password = passRef.current?.value as string
    resetRef()
    toast.promise(
      register(username, email, password), {
        loading: 'Saving...',
        success: 'New User Created',
        error: 'An error occurred, Please try again'
      }, {
        style: {
          border: '1px solid #dcca87',
          padding: '16px',
          color: '#dcca87'
        },
        iconTheme: {
          primary: '#dcca87',
          secondary: '#FFFAEE'
        }
      }
    )
      .then(() => {
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      })
      .catch((err: Error) => {
        console.log(err)
      })
  }

  const handleLogin = (e: FormEvent): void => {
    e.preventDefault()
    const username = nameRefLogin.current?.value as string
    const password = passRefLogin.current?.value as string
    resetRefLogin()
    toast.promise(
      login(username, password), {
        loading: 'Authenticating, Just a minute...',
        success: 'You have been logged in',
        error: 'An error occurred, Please try again'
      }, {
        style: {
          border: '1px solid #dcca87',
          padding: '16px',
          color: '#dcca87'
        },
        iconTheme: {
          primary: '#dcca87',
          secondary: '#FFFAEE'
        }
      }
    )
      .then(() => {
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      })
      .catch((err: Error) => {
        console.log(err)
      })
  }

  return (
    <div className='authenticate-modal'>
      <Toaster />
      <div className='formArea'>
        <h2>Register or Login to make a Reservation</h2>
        <div className='buttonArea'>
          <button className='active' ref={registerButtonRef} onClick={() => { handleRegisterButtonClick() }}>Register</button>
          <button ref={loginButtonRef} onClick={() => { handleLoginButtonClick() }}>Login</button>
        </div>

        {(isRegistering)
          ? <div className='formRegister'>
          <form onSubmit={(e) => handleRegistration(e)}>
            <input
              type='text'
              name='username'
              placeholder='Enter Username...'
              ref={nameRef}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Enter Email...'
              ref={emailRef}
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Enter Password...'
              ref={passRef}
              required
            />
            <input
              type='submit'
              value='Register'
            />
          </form>
        </div>
          : <div className='formLogin'>
          <form onSubmit={(e) => handleLogin(e)}>
            <input
              type='text'
              name='username'
              placeholder='Enter Username...'
              ref={nameRefLogin}
            />
            <input
              type='password'
              name='password'
              placeholder='Enter Password...'
              ref={passRefLogin}
            />
            <input
              type='submit'
              value='Login'
            />
          </form>
        </div>
        }
      </div>
    </div>
  )
}

export default Authenticate
