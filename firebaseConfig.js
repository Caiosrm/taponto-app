import firebase from 'firebase';

const firebaseConfig = {
    databaseURL: "",
    apiKey: "",
    authDomain: "",
    projectID: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}

firebase.initializeApp(firebaseConfig)

export default firebase;