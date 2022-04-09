import {
  createUserDocumnetFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase.config'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumnetFromAuth(user)
  }

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  )
}

export default SignIn
