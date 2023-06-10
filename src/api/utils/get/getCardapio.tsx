import { getFirestore, collectionGroup, getDocs, collection } from "firebase/firestore";
import { ProdutoType } from "../../types/ProdutoType";
import { CardapioType } from "../../types/CardapioType";

// Função para consultar a coleção do cardápio em todas as cantinas
export async function getCardapio(cantinaId: string) {
  const db = getFirestore();
  const cardapioRef = collection(db, "cantinas", cantinaId, "cardapio");
  const querySnapshot = await getDocs(cardapioRef);

  const cardapio: CardapioType = {
    cantinaId: '',
    itens: []
  };
  querySnapshot.forEach((doc) => {
    const response = doc.data();
    
    const produto: ProdutoType = {
      id: doc.id,
      nome: response.nome,
      descricao: response.descricao,
      cantinaId: response.cantinaId,
      quantidade: response.quantidade,
      valor: response.valor
    };
    cardapio.itens.push(produto);
  });

  return cardapio;
}