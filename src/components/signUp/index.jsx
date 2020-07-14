import React, { useState } from 'react'

import FormInput from '../form-input'
import CustomButton from '../custom-button'
import { auth, createUserProfileDocument } from '../../firebase/utils'

import './styles.scss'

const SignUp = () => {
  const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  // using hooks
  const [newUser, setNewUser] = useState(initialState)

  const { displayName, email, password, confirmPassword } = newUser

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match")
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      setNewUser(initialState)
    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          label='Display Name'
          onChange={handleChange}
          required />

        <FormInput
          type='email'
          name='email'
          value={email}
          label='Email'
          autoComplete="user"
          onChange={handleChange}
          required />

        <FormInput
          type='password'
          name='password'
          value={password}
          label='Password'
          onChange={handleChange}
          autoComplete="current-password"
          required />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label='Confirm Password'
          autoComplete="current-password"
          onChange={handleChange}
          required />

        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp