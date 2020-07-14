import React, { useState } from 'react'

import FormInput from '../form-input'
import CustomButton from '../custom-button'
import { auth, signInWithGoogle } from '../../firebase/utils'

import './styles.scss'
const initialData =
{
  email: '',
  password: ''
}

const SignIn = () => {
  // using hooks
  const [user, setUser] = useState(initialData);
  const { email, password } = user

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = user
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setUser(initialData);
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='sign-in-page'>
      <h1>I have already an account</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          autoComplete="username"
          required
          handleChange={handleChange}
          label="Email" />

        <FormInput
          type="password"
          name="password"
          value={password}
          autoComplete="current-password"
          required
          handleChange={handleChange}
          label="Password" />
        <div className='buttons'>
          <CustomButton>Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In with google</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn