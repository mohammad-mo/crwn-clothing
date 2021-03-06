import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'

import { signUpStart } from '../../store/user/user.action'

import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFeilds = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFeilds()
    } catch (err) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          alert('Cannot create user, email already in use')
          break
        case 'auth/weak-password':
          alert('Password should be at least 6 characters')
          break
        default:
          console.log(err.message)
      }
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
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
        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm
