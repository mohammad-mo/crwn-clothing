import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAUttwCcuIAshYENXD0zjaqJNe30oMSaf8',
  authDomain: 'crwn-clothing-db-78dd3.firebaseapp.com',
  projectId: 'crwn-clothing-db-78dd3',
  storageBucket: 'crwn-clothing-db-78dd3.appspot.com',
  messagingSenderId: '458832764993',
  appId: '1:458832764993:web:a5850f7ed8763a9283e6c0',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumnetFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (err) {
      console.log('error creating the user', err.message)
    }
  }

  return userDocRef

  // if user data exists

  // if user data doesn't exists

  // return userDoc
}
