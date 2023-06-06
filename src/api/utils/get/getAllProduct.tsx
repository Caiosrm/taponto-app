import { IProduto } from "../../../components/Screen/Cardapio/types";

import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "../../config/firebaseConfig";
import { ProdutoType } from "../../types/ProductType";


//Método para retornar os produtos cadastrados
export async function getAllProdutos() {
	const db = getFirestore(app);
	try {
		const querySnapshot = await getDocs(collection(db, "produtos"));
		let produtos: ProdutoType[] = [];
		querySnapshot.forEach((doc) => {
			const response = doc.data();
			const produto: ProdutoType = {
				id: doc.id,
				nome: response?.nome,
				descricao: response?.descricao,
				cantinaId: response?.cantinaId,
				quantidade: response?.quantidade,
				valor: response?.valor,
                avaliacoes: {
                    comentario: response?.avaliacoes.comentario,
                    clienteId: response?.avaliacoes.clienteId,
                    nota: response?.avaliacoes.nota,
                }
			}
			produtos.push(produto);
		});
		return produtos;
	} catch (error) {
		console.log(error);
		return [];
	}
}