import { app } from "../../firebaseConfig";
import { IProduto } from "../components/Screen/Cardapio/types";
import React from "react";

import { getFirestore, getDocs, collection, Firestore } from "firebase/firestore";
import firebase from 'firebase/app';

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
				valor: data.valor,
				descricao: data.descricao,
				tipoDeAlimento: data.tipoDeAlimento,
				quantidade: data.quantidade,
				calorias: data.calorias,
				ingredientes: data.ingredientes,
				imagem: data.imagem,
				avaliacao: data.avaliacao,
				review: data.review
			}
			produtos.push(produto);
			console.log("getAllProdutos => Produtos => ", produtos)
		});
		return produtos;
	} catch (error) {
		console.log(error);
		return [];
	}
}

