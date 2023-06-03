import { SacolaType } from "../../types/CartType";

import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { app } from "../../config/firebaseConfig";


//Método para retornar a sacola do cliente
export async function getCart(clienteId: string) {
	const db = getFirestore(app);
	try {
		const querySnapshot = await getDocs(
			query(
				collection(db, "sacola"),
				where("idCliente", "==", clienteId)) //passando apenas o id para receber o objeto
		);
		
		let sacola: SacolaType | null = null; // aceita apenas o objeto ou o valor nulo caso não encontre

		querySnapshot.forEach((doc) => {
			const data = doc.data();
			sacola = {
				id: doc.id,
				idCliente: data.idCliente,
				valorTotal: data.valorTotal,
				itens: data.itens,
			};
		});
		return sacola;
	} catch (error) {
		console.log(error);
		return null;
	}
}
