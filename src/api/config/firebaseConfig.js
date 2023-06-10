import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence} from "firebase/auth/react-native";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from "firebase/auth"; //não remover
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDz7CM4oQhdCMlEOWjHYcuF2auh-AHRH7M",
  authDomain: "testeenviardados.firebaseapp.com",
  databaseURL: "https://testeenviardados-default-rtdb.firebaseio.com",
  projectId: "testeenviardados",
  storageBucket: "testeenviardados.appspot.com",
  messagingSenderId: "166968148425",
  appId: "1:166968148425:web:ab2df075160fb59a5ee818",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage)});
export const storage = getStorage();

