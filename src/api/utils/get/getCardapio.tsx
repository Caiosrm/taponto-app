import { getFirestore, collectionGroup, getDocs, collection } from "firebase/firestore";
import { ProdutoType } from "../../types/ProdutoType";
import { CardapioType } from "../../types/CardapioType";

// Função para consultar a coleção do cardápio em todas as cantinas
export async function getCardapio(cantinaId: string) {
  console.log("FIREBASE GET ->", cantinaId)
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
      tipo: response.tipo,
      valor: response.valor,
      imagem: response?.imagem,
      codigoDeBarras: response?.codigoDeBarras,
      visibilidade: response?.visibilidade
    };
    cardapio.itens.push(produto);
  });

  return cardapio;
}