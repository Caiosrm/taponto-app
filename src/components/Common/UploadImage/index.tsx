import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, uploadString, uploadBytes, UploadMetadata, ref } from 'firebase/storage';
import { Button } from 'native-base';
import { storage } from '../../../api/config/firebaseConfig';

export const uploadImage = async (base64Uri: string) => {
    const storageRef = ref(storage, 'nome_da_pasta/no_meu_storage');
    const metadata: UploadMetadata = {
        contentType: 'image/jpeg/png', // Defina o tipo de conteúdo correto da imagem
    };

    await uploadString(storageRef, base64Uri, 'data_url', metadata);

    const downloadURL = await getDownloadURL(storageRef);
    console.log('URL da imagem:', downloadURL);
};


export const selectImageFromGallery = async () => {
    //Solicitar permissão à Galeria
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
        console.log('Permissão de acesso à Galeria negada! 😒');
        alert('Permissão de acesso à Galeria negada! 😒');

        return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0.8,
    });

    if (pickerResult.canceled) {
        console.log('Seleção de imagem cancelada. 👍');
        alert('Seleção de imagem cancelada. 👍');
        return;
    }

    // A imagem foi selecionada com sucesso
    uploadImage(pickerResult.uri);
};
