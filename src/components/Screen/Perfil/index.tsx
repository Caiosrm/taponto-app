import { View, Alert, Button, Image } from "native-base";
import React, { useState } from "react";
import { IPerfilScreenProps } from "./types";
import TopBar from "../../Common/TopBar";
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { storage } from '../../../api/config/firebaseConfig'

const PerfilScreen = (props: IPerfilScreenProps) => {

    const [image, setImage] = React.useState<any>(null);


    const selectImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert('Permissão de acesso à galeria negada');
            return;
        }


        const resultado = await ImagePicker.launchImageLibraryAsync();
        if (!resultado.canceled) {
            setImage(resultado.uri);
            console.log(resultado.uri)
        }
    };

    const uploadImage = async () => {
        if (image) {
            const storage = getStorage();
            const response = await fetch(image);
            const blob = await response.blob();
            const fileRef = ref(storage, 'images4');
            uploadBytes(fileRef, blob)
            console.log('Upload completo');
        }
    };


    return (
        <View>
            {image && <Image 
            source={{ uri: image }} 
            style={{ width: 200, height: 200 }} />}

            <Button onPress={image}>
                Selecionar imagem
            </Button>
            <Button onPress={uploadImage}>
                Confirmar
            </Button>

        </View>

    );
};

export default PerfilScreen;
;