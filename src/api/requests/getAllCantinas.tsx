import { getFirestore, getDocs, collection } from "@firebase/firestore";
import { app } from "../../../firebaseConfig";
import { ICantinaProps } from "../../components/Screen/Cantina/types";


export async function getAllCantinas() {
	const db = getFirestore(app);
	try {
		const querySnapshot = await getDocs(collection(db, "cantinas"));
		let cantinas: ICantinaProps[] = [];
		querySnapshot.forEach((doc) => {
			const data = doc.data();
			console.log(data)
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