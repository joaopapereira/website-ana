import { Handler } from '@netlify/functions'

import { collection, addDoc } from "firebase/firestore";

type Contact = {
  name: string,
  email: string,
  message: string
}
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  FIREBASE_CONFIGURATION
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export const handler: Handler = async (event, context) => {
  let success = false
  let errorMessage = ''
  if (event.body !== null) {
    let message: Contact = JSON.parse(event.body)
    await addDoc(collection(db, 'contacts'), {
      name: message.name,
      email: message.email,
      message: message.message
    }).then(() => success = true)
      .catch((err) => errorMessage = err)
  }

  if (success) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Message sent successfuly'
      })
    }
  }

  return {
    statusCode: 500,
    body: JSON.stringify({
      message: `Failed to send message: ${errorMessage}`,
    }),
  }
}
