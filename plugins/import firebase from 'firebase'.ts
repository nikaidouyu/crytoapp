import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
	apiKey: "AIzaSyBwf7s0bxd2S9vM5Hg6cCc0aZujp8r0Vho",
	authDomain: "crytoapp-4bb7b.firebaseapp.com",
	projectId: "crytoapp-4bb7b",
	storageBucket: "crytoapp-4bb7b.appspot.com",
	messagingSenderId: "216116340259",
	appId: "1:216116340259:web:8fafa2839b5875339cb396",
	measurementId: "G-XRNC5H337C"
    }
  )
}
  
export default firebase