import React, { ReactElement, createRef, useState, FormEvent } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { register } from '../../api/authentication'
import './Authenticate.scss'

const Authenticate = (): ReactElement => {
  const [isRegistering, setIsRegistering] = useState(true)
  const nameRef = createRef<HTMLInputElement>()
  const emailRef = createRef<HTMLInputElement>()
  const passRef = createRef<HTMLInputElement>()
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
      }
    )
      .then((res) => {
        console.log(res)
      })
      .catch(() => {})
  }

  return (
    <div className='authenticate-modal'>
      <Toaster />
      <div className="preForm">
        <h2>Welcome to Gericht</h2>
        <p>Register or Login to make a Reservation</p>
      </div>
      <hr color='#dcca87'/>
      <div className='formArea'>
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
          <form>
            <input
              type='text'
              name='username'
              placeholder='Enter Username...'
              ref={nameRef}
            />
            <input
              type='password'
              name='password'
              placeholder='Enter Password...'
              ref={passRef}
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
