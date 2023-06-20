import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import { app } from "../../config/firebaseConfig";
import { ProdutoType } from "../../types/ProdutoType";


// Função para consultar um produto específico
export async function getProduto(cantinaId: string, cardapioId: string, produtoId: string) {
  const db = getFirestore();
  const cantinaRef = doc(collection(db, "cantinas"), cantinaId);
  const cardapioRef = doc(collection(cantinaRef, "cardapio"), cardapioId);
  const produtoRef = doc(collection(cardapioRef, "produtos"), produtoId);

  try {
    const produtoSnapshot = await getDoc(produtoRef);
    if (produtoSnapshot.exists()) {
      // O produto existe, retornar os dados
      const produtoData = produtoSnapshot.data();
      console.log('GetProduto: ', produtoData)
      return {
        id: produtoSnapshot.id,
        ...produtoData
      };
    } else {
      console.log("O produto não existe");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}


