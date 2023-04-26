import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "../../firebaseConfig";
import { IProduto } from "../components/Screen/Cardapio/types";
import React from "react";

export async function getProdutos() {
    const db = getFirestore(app);
    try {
        const querySnapshot = await getDocs(collection(db, "produtos"));
        let produtos: IProduto[] = [];
        querySnapshot.forEach((doc) => {
			const data = doc.data();
			const produto: IProduto = {
				id: doc.id,
				description: data.descricao,
				image: data.image,
				price: data.valor 
			}
            produtos.push(produto);
			console.log(produtos)
        });
        return produtos;
    } catch (error) {
        console.log(error);
        return [];
    }
}