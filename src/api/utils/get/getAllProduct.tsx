import { IProduto } from "../../../components/Screen/Cardapio/types";

import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "../../config/firebaseConfig";


//Método para retornar os produtos cadastrados
export async function getAllProdutos() {
	const db = getFirestore(app);
	try {
		const querySnapshot = await getDocs(collection(db, "produtos"));
		let produtos: IProduto[] = [];
		querySnapshot.forEach((doc) => {
			const data = doc.data();
			const produto: IProduto = {
				id: doc.id,
				nome: data.nome,
				cantinaId: data.cantinaId,
				descricao: data.descricao,
				quantidade: data.quantidade,
				avaliacoes: data.avaliacoes,
				valor: data.valor
			}
			produtos.push(produto);
		});
		return produtos;
	} catch (error) {
		console.log(error);
		return [];
	}
}