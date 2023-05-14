import { app } from "../../firebaseConfig";
import { IProduto } from "../../components/Screen/Cardapio/types";
import React from "react";

import { getFirestore, getDocs, collection, Firestore } from "firebase/firestore";
import firebase from 'firebase/app';
import { ICantinaProps } from "../../components/Screen/Cantina/types";


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
				calorias: data.calorias,
				ingredientes: data.ingredientes,
				imagem: data.imagem,
				avaliacao: data.avaliacao,
				review: data.review,
				valorUnitario: 0
			}
			produtos.push(produto);

		});
		return produtos;
	} catch (error) {
		console.log(error);
		return [];
	}
}


export async function getAllClientes() {

}


export async function getAllCantinas() {
	const db = getFirestore(app);
	try {
		const querySnapshot = await getDocs(collection(db, "cantinas"));
		let cantinas: ICantinaProps[] = [];
		querySnapshot.forEach((doc) => {
			const data = doc.data();
			console.log(data)
			const cantina: ICantinaProps = {
				lanchonete: data.lanchonete
			}

			cantinas.push(cantina);
		});
		return cantinas;
	} catch (error) {
		console.log(error);
		return [];
	}
}

