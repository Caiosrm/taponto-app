import { app } from "../firebaseConfig";
import { IProduto } from "../../components/Screen/Cardapio/types";

import { getFirestore, getDocs, collection } from "firebase/firestore";

//Método para retornar os produtos cadastrados
export async function getAllProdutos() {
	const db = getFirestore(app);
	try {
		const querySnapshot = await getDocs(collection(db, "produtos"));
		let produtos: IProduto[] = [];
		querySnapshot.forEach((doc) => {
			const data = doc.data();
			console.log(data)
			const produto: IProduto = {
				id: doc.id,
				nome: data.nome,
				lanchonete: data.lanchonete,
				descricao: data.descricao,
				tipoDeAlimento: data.tipoDeAlimento,
				quantidade: data.quantidade,
				imagem: data.imagem,
				avaliacao: data.avaliacao,
				review: data.review,
				valor: data.valor,
			}
			produtos.push(produto);

		});
		return produtos;
	} catch (error) {
		console.log(error);
		return [];
	}
}