import React, { ReactElement, createRef, useState, useEffect } from 'react'
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

  return (
    <div className='authenticate-modal'>
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
          <form>
            <input
              type='text'
              name='username'
              placeholder='Enter Username...'
              ref={nameRef}
            />
            <input
              type='email'
              name='email'
              placeholder='Enter Email...'
              ref={emailRef}
            />
            <input
              type='password'
              name='password'
              placeholder='Enter Password...'
              ref={passRef}
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
