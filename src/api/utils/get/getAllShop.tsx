import { getFirestore, getDocs, collection } from "@firebase/firestore";
import { app } from "../../config/firebaseConfig";
import { CantinaType } from "../../types/CantinaType";


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
				notaGeral: response.notaGeral,
				pedidos: response.pedidos,
				imagem: response?.imagem,
				avaliacoes: response.avaliacoes,
				polo: response.polo
			}
			cantinas.push(cantina);


		});
		return cantinas;
	} catch (error) {
		console.log(error);
		return [];
	}
}