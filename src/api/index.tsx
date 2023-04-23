import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "../../firebaseConfig";

export async function getProdutos() {
	const db = getFirestore(app)
	try {
		const querySnapshot = await getDocs(collection(db, "produtos"));
		let produtoLista: { id: string; }[] = []
		querySnapshot.forEach((doc) => {
			console.log(doc.id, " => ", doc.data());
			let produto = { id: doc.id, ...doc.data }
			produtoLista.push(produto)
		});
		return produtoLista
	} catch (error) {
		console.log(error)
		return []
	}
};