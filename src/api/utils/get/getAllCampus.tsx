// import { CampusType } from '../../types/CampusType';

// import { app } from '../../config/firebaseConfig';
// import { collection, getDocs, getFirestore } from 'firebase/firestore';


// //Método para retornar os campus cadastrados
// export async function getPolos() {
//   const db = getFirestore(app);
//   try {
//     const querySnapshot = await getDocs(collection(db, "produtos"));
//     let unidades: CampusType[] = [];
//     querySnapshot.forEach((doc) => {
//       const data = doc.data();
//       const campus: CampusType = {
//         id: doc.id,
//         nome: data.nome,
//         rua: data.rua,
//         numero: data.numero,
//         bairo: data.bairro
//       }
//       unidades.push(campus);
//     });
//     return unidades;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }