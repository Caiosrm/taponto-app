import { getFirestore, doc, updateDoc } from '@firebase/firestore';
import React from 'react'
import { app } from '../../config/firebaseConfig';
import { ProdutoType } from '../../types/ProdutoType';


//Método que altera um documento na coleção do firebase
export async function putProduto(produtoId: string, dados: ProdutoType) {
    const db = getFirestore(app);
    const produtoRef = doc(db, "produtos", produtoId);
    try {
        await updateDoc(produtoRef, dados);
        console.log("Produto atualizado com sucesso!");
    } catch (error) {
        console.log("Erro ao atualizar o produto:", error);
    }
}
