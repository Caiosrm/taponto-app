import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../firebaseConfig";

const dados = require('../../data/MOCK_DATA.json');

// Método para cadastrar um novo produto
export async function postProduto(produto: any) {
    const db = getFirestore(app);
    const produtosCollection = collection(db, "produtos");
    const docRef = await addDoc(produtosCollection, produto);
    console.log("Documento adicionado com ID: ", docRef.id);
}

// Método para cadastrar um array de produtos
async function lerJSONEnviarFirebase() {
    for (const produto of dados) {
      await postProduto(produto);
    }
  }