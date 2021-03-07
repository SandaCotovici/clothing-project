import React, { useState } from 'react'

import FormInput from '../form-input'
import { useDispatch } from 'react-redux'
import CustomButton from '../custom-button'

import './styles.scss'
import { signUpStart } from '../../redux/user/actions'

const SignUp = () => {
  const dispatch = useDispatch()

  const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  const [newUser, setNewUser] = useState(initialState)
  const { displayName, email, password, confirmPassword } = newUser

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("Password don't match")
      return
    }
    dispatch(signUpStart({ email, password, displayName }))
  }

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          onChange={handleChange}
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          autoComplete="user"
          onChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
          autoComplete="current-password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          autoComplete="current-password"
          onChange={handleChange}
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp
