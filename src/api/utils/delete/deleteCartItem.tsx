// import { getFirestore, doc, updateDoc, arrayRemove } from "@firebase/firestore";
// import { app } from "../../config/firebaseConfig";


// //Método que exclui um documento na coleção do firebase
// export async function deleteCartItem(sacolaId: string, itemId: string) {
//     const db = getFirestore(app);
//     const sacolaRef = doc(db, "sacola", sacolaId);

//     try {
//         await updateDoc(sacolaRef, {
//             itens: arrayRemove(itemId),
//         });
//         console.log("Item removido do carrinho com sucesso.");
//     } catch (error) {
//         console.log("Erro ao remover o item do carrinho:", error);
//     }
// }

