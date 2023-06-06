import { getFirestore, getDocs, collection } from "@firebase/firestore";
import { app } from "../../config/firebaseConfig";
import { CantinaType } from "../../types/ShopType";


//Método para retornar as cantinas cadastrados
export async function getAllShop() {
	const db = getFirestore(app);
	try {
		const querySnapshot = await getDocs(collection(db, "cantinas"));
		let cantinas: CantinaType[] = [];
		querySnapshot.forEach((doc) => {
			const response = doc.data();
			const cantina: CantinaType = {
				id: doc.id,
				nome: response.nome,
				cardapio: response.cardapio,
				descricao: response.descricao,
				status: response.status,
				pedidos: response.pedidos,
				avaliacoes: response.avaliacoes,
				idCampus: response.idCampus
			}
			cantinas.push(cantina);
		});
		return cantinas;
	} catch (error) {
		console.log(error);
		return [];
	}
}