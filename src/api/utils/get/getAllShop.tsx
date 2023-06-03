import { getFirestore, getDocs, collection } from "@firebase/firestore";
import { app } from "../../config/firebaseConfig";
import { ICantinaProps } from "../../../components/Screen/Cantina/types";


//Método para retornar as cantinas cadastrados
export async function getAllShop() {
	const db = getFirestore(app);
	try {
		const querySnapshot = await getDocs(collection(db, "cantinas"));
		let cantinas: ICantinaProps[] = [];
		querySnapshot.forEach((doc) => {
			const data = doc.data();
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