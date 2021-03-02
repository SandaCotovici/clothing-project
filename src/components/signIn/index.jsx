import React, { useState } from 'react'

import FormInput from '../form-input'
import CustomButton from '../custom-button'

import './styles.scss'
import { useDispatch } from 'react-redux'
import { emailSignInStart, googleSignInStart } from '../../redux/user/actions'
const initialData = {
  email: '',
  password: '',
}

const SignIn = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(initialData)
  const { email, password } = user

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(emailSignInStart(email, password))
  }
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  // const handleClick = () => dispatch(googleSignInStart())

  return (
    <div className="sign-in-page">
      <h1>I have already an account</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          autoComplete="username"
          required
          handleChange={handleChange}
          label="Email"
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          autoComplete="current-password"
          required
          handleChange={handleChange}
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign In with google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
