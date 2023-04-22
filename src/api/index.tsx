
import { initializeApp } from "firebase/app";
import { getDocs, collection, getFirestore } from 'firebase/firestore';



export const firebaseConfig = {
    apiKey: "AIzaSyDz7CM4oQhdCMlEOWjHYcuF2auh-AHRH7M",
    authDomain: "testeenviardados.firebaseapp.com",
    databaseURL: "https://testeenviardados-default-rtdb.firebaseio.com",
    projectId: "testeenviardados",
    storageBucket: "testeenviardados.appspot.com",
    messagingSenderId: "166968148425",
    appId: "1:166968148425:web:ab2df075160fb59a5ee818"

}

const firebaseApp = initializeApp(firebaseConfig);




 const db = getFirestore(firebaseApp);
const userCollectionRef = collection(db, 'users');

export const firebasedata = async () => {
  const querySnapshot = await getDocs(userCollectionRef);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log(data);
  return data;
}