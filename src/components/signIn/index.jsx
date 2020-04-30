import React, { useState } from 'react'

import FormInput from '../form-input'
import './styles.scss'
import CustomButton from '../custom-button'
const initialData =
{
  email: '',
  password: ''
}

const SignIn = () => {
  const [email, setEmail] = useState(initialData.email);
  const [password, setPassword] = useState(initialData.password);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  }

  return (
    <div className='sign-in-page'>
      <h1>I have already an account</h1>
      <form onSUbmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          handleChange={e => setEmail(e.target.value)}
          label="Email" />

        <FormInput
          type="password"
          name="password"
          value={password}
          required
          handleChange={e => setPassword(e.target.value)}
          label="Password" />

        <CustomButton>Sign In</CustomButton>
      </form>
    </div>
  )
}

export default SignIn