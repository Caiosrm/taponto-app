import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebaseConfig";

const dados = require('../__mocks__/MOCK_DATA.json');

// Método para cadastrar um novo produto
export async function postProduto(produto: any) {
    const db = getFirestore(app);
    const produtosCollection = collection(db, "produtos");
    const docRef = await addDoc(produtosCollection, produto);
    console.log("Documento adicionado com ID: ", docRef.id);
}

// Loop para cadastrar um array de produtos
export async function lerJSONEnviarFirebase() {
  for (const produto of dados) {
      await postProduto(produto);
  }
}
