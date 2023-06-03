// import { getFirestore, collection, doc, deleteDoc } from "@firebase/firestore";
// import { app } from "../../config/firebaseConfig";

// //Método que exclui um documento na coleção do firebase
// export async function deleteLoja(lojaId: string) {
//     const db = getFirestore(app);
//     const lojasRef = collection(db, "lojas");
//     const lojaDocRef = doc(lojasRef, lojaId);

//     try {
//         await deleteDoc(lojaDocRef);
//         console.log("Loja excluída com sucesso!");
//     } catch (error) {
//         console.log("Erro ao excluir a loja:", error);
//     }
// }