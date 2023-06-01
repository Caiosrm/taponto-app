import { SacolaType } from "../../types/CartType";

import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "../../config/firebaseConfig";


//Método para retornar a sacola do cliente
export async function getCart () {
	const db = getFirestore(app);
    try {
		const querySnapshot = await getDocs(collection(db, "sacola"));
		let sacolas: SacolaType[] = [];
		querySnapshot.forEach((doc) => {
			const data = doc.data();
			const sacola: SacolaType = {
                id: doc.id,
                idCliente: data.idCliente,
                valorTotal: data.valorTotal,
                itens: data.itens
            }
			sacolas.push(sacola);
		});
		return sacolas;
	} catch (error) {
		console.log(error);
		return [];
	}
}