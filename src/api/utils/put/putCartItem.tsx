import { SacolaType } from '../../types/SacolaType';

import { collection, getDocs, getFirestore, query, updateDoc, where } from '@firebase/firestore';
import { app } from '../../config/firebaseConfig';

//Método que altera um documento na coleção do firebase


