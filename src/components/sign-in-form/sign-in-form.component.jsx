import { useState } from 'react'
import { useNavigate } from 'react-router'

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.config'

import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'

import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const navigate = useNavigate()

  const resetFormFeilds = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const signInWithGoogle = async () => {
    const googleUserCredential = await signInWithGooglePopup()

    if (googleUserCredential) navigate('/')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const userCredential = await signInAuthUserWithEmailAndPassword(
        email,
        password,
      )

      if (userCredential) navigate('/')

      resetFormFeilds()
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          alert('No user associated with this email')
          break
        case 'auth/wrong-password':
          alert('Incorrect password for email')
          break
        default:
          console.log(err)
      }
    }
  }

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
