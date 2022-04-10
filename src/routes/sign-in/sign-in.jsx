import {
  createUserDocumnetFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase.config'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
  //   useEffect(() => {
  //     const getResult = async () => {
  //       const response = await getRedirectResult(auth)
  //       if (response) {
  //         const userDocRef = await createUserDocumnetFromAuth(response.user)
  //       }
  //     }
  //     getResult()
  //   }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumnetFromAuth(user)
  }

  //   const logGoogleRedirectUser = async () => {
  //     const { user } = await signInWithGoogleRedirect()
  //     console.log(user)
  //     // const userDocRef = await createUserDocumnetFromAuth(user)
  //   }

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
