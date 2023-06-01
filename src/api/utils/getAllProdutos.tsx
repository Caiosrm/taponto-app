import { IProduto } from "../../components/Screen/Cardapio/types";
import React from "react";

import { getFirestore, getDocs, collection, Firestore } from "firebase/firestore";
import firebase from 'firebase/app';
import { ICantinaProps } from "../../components/Screen/Cantina/types";
import { app } from "../firebaseConfig";


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
				lanchonete: data.lanchonete,
				descricao: data.descricao,
				tipoDeAlimento: data.tipoDeAlimento,
				quantidade: data.quantidade,
				imagem: data.imagem,
				avaliacao: data.avaliacao,
				review: data.review,
				valor: 0
			}
			produtos.push(produto);

		});
		return produtos;
	} catch (error) {
		console.log(error);
		return [];
	}
}


