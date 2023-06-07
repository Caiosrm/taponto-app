import { getFirestore, collectionGroup, getDocs, collection } from "firebase/firestore";
import { ProdutoType } from "../../types/ProdutoType";

// Função para consultar a coleção do cardápio em todas as cantinas
async function getCardapio(cantinaId: string) {
  const db = getFirestore();
  const cardapioRef = collection(db, "cantinas", cantinaId, "cardapio");
  const querySnapshot = await getDocs(cardapioRef);

  const cardapios: ProdutoType[] = [];
  querySnapshot.forEach((doc) => {
    const response = doc.data();
    
    const cardapio: ProdutoType = {
      id: doc.id,
      nome: response.nome,
      descricao: response.descricao,
      cantinaId: response.cantinaId,
      quantidade: response.quantidade,
      valor: response.valor
    };
    cardapios.push(cardapio);
  });

  return cardapios;
}