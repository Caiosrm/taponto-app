import { View,  Alert, Button, Image } from "native-base";
import React, {  useState } from "react";
import { IPerfilScreenProps } from "./types";
import TopBar from "../../Common/TopBar";
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import {storage} from '../../../api/config/firebaseConfig'

const PerfilScreen = (props: IPerfilScreenProps) => {
    const [selecionarimagem, setSelecionarimagem] = useState(null);

    const selectImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert('Permissão de acesso à galeria negada');
            return;
        }

        const resultado = await ImagePicker.launchImageLibraryAsync();
        if (!resultado.canceled) {
            setSelecionarimagem(resultado.uri);
            console.log(resultado.uri)
        }
    };

    const uploadImage = async () => {
        if (selecionarimagem) {
          const storage = getStorage();
          const response = await fetch(selecionarimagem);
          const blob = await response.blob();
    
          const fileReferencia = ref(storage, 'images3');
    
          uploadBytes(fileReferencia, blob)
            
              console.log('Upload completo');
              
            
        } 
      };

    

    return (
        <View >



            {selecionarimagem && <Image source={{ uri: selecionarimagem }} style={{ width: 200, height: 200 }} />}
            <Button onPress={selectImage}>Selecionar imagem</Button>
            <Button onPress={uploadImage}>Carregar imagem</Button>



        </View>

    );
};

export default PerfilScreen;
;