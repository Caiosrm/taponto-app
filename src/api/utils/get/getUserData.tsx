import { collection, getDocs, getFirestore } from '@firebase/firestore';
import React from 'react'
import { ClienteType } from '../../types/UserType';
import { initialStateSacola } from '../../types/SacolaType';
import { initialStateCampus } from '../../types/CampusType';

export async function getUserData(userId: string) {

    const db = getFirestore();

    const userRef = collection(db, "cantinas", userId);

    const querySnapshot = await getDocs(userRef);

    const cliente: ClienteType = {
        id: '',
        nome: '',
        matricula: 0,
        polo: initialStateCampus,
        celular: '',
        email: '',
        senha: '',
        sacola: initialStateSacola
    }




    
    return '';
}
