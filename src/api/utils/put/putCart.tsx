import { SacolaType } from '../../types/CartType';

import { collection, getDocs, getFirestore, query, updateDoc, where } from '@firebase/firestore';
import { app } from '../../config/firebaseConfig';

//Método que altera um documento na coleção do firebase
export async function putCart(clienteId: string, dados: SacolaType) {
    const db = getFirestore(app);
    const sacolaRef = collection(db, "sacola");
    try {
        const querySnapshot = await getDocs(
            query(sacolaRef, where("idCliente", "==", clienteId))
        );

        querySnapshot.forEach(async (doc) => {
            const sacolaDocRef = doc.ref;
            await updateDoc(sacolaDocRef, dados);
            console.log("Sacola do cliente atualizada com sucesso!");
        });
    } catch (error) {
        console.log("Erro ao atualizar a sacola do cliente:", error);
    }
}

