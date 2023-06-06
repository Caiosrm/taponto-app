// import { getFirestore, collection, addDoc } from "@firebase/firestore";
// import { app } from "../../config/firebaseConfig";

// const dados = require('../__mocks__/MOCK_DATA.json');

// //Método que cadastra uma Cantina na coleção do Firebase
// export async function postCantina(cantina: any) {
//     const db = getFirestore(app);
//     const cantinasCollection = collection(db, "cantinas");
//     const docRef = await addDoc(cantinasCollection, cantina);
//     console.log("Documento adicionado com ID: ", docRef.id);
// }


// // Loop para cadastrar um array de cantinas
// // export async function lerJSONEnviarFirebase() {
// //     for (const lanchonete of dados) {
// //         await postCantina(lanchonete);
// //     }
// // }

