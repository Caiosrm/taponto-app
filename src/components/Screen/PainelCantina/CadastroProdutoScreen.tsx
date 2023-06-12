import React, { useEffect, useState } from 'react';
import { View, Text, Box, Image, FormControl, Input, TextArea, Select, ScrollView, Button, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../../themes/Theme';
import { CardapioType } from '../../../api/types/CardapioType';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../../api/config/firebaseConfig';
import { getDownloadURL, uploadString, UploadMetadata, ref } from 'firebase/storage';
import { HeaderCantina } from '../../Common/Header';

interface ICadastroProdutoScreen {
  pageTitle?: string;
  visibilidade: boolean;
}


const CadastroProdutoScreen = (props: ICadastroProdutoScreen) => {

  const [nome, setNome] = React.useState<string>('');
  const [preco, setPreco] = React.useState<string>('');
  const [cardapio, setCardapio] = React.useState<CardapioType[]>();
  const [imagem, setImagem] = React.useState<any>();
  const [visibilidade, setVisibilidade] = React.useState<boolean>(true);
  /*===================================================================================================*/
  /* handleChange's
  /*===================================================================================================*/
  const handleUploadImage = async (base64Uri: string) => {
    const storageRef = ref(storage, 'nome_da_pasta/no_meu_storage');
    const metadata: UploadMetadata = {
      contentType: 'image/jpeg/png', // Defina o tipo de conteúdo correto da imagem
    };

    await uploadString(storageRef, base64Uri, 'data_url', metadata);

    const downloadURL = await getDownloadURL(storageRef);
    console.log('URL da imagem:', downloadURL);
  };

  const handleSelectImageFromGallery = async () => {
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
    setImagem(pickerResult.uri);
  };

  const handleSalvarTudo = () => {
    handleUploadImage(imagem);
  };

  /*===================================================================================================*/
  /* useEffect's
  /*===================================================================================================*/




  return (
    <Box>

      <ScrollView>
        <HeaderCantina pageTitle="Cadastrar Produto" />
        <Box flex={1} alignItems='center'>

          <Box padding={5} bg={colors.light.brancoPuro}>

            <FormControl.Label>Nome do produto</FormControl.Label>
            <Input placeholder='Produto' />

            <FormControl.Label>Descrição</FormControl.Label>
            <Box alignItems="center" w="100%">
              <TextArea h={20} placeholder="Descreva detalhes do produto" autoCompleteType={undefined} />
            </Box>

            <FormControl.Label>Valor de venda</FormControl.Label>
            <Input placeholder='R$ 0,00' />

            <FormControl.Label>Categoria</FormControl.Label>
            <Input placeholder='Selecione a categoria' />

            <FormControl.Label>Código de barra</FormControl.Label>
            <Box alignItems='center' flexDirection='row'>
              <Input mr={3} w="320px" />
              <Icon as={Ionicons} name='ios-barcode-outline' size={10} />


            </Box>
            <FormControl.Label>Estoque atual</FormControl.Label>
            <Input />

            <FormControl.Label>Valor de compra (Preço de custo)</FormControl.Label>
            <Input placeholder='R$ 0,00' />


            <FormControl.Label>Exibir no catálogo</FormControl.Label>
            <Select>
              <Select.Item label="Sim" value="ux" /> {/*TODO: criar função de ocultar um item do cardápio*/}
              <Select.Item label="Não" value="cross" />


            </Select>
            <Box mb='30px' >
              <FormControl.Label>Imagem do produto</FormControl.Label>
              <Box
                alignItems='center'
                justifyContent='space-around'
                flexDirection='row'
                borderRadius={10}
                borderColor="coolGray.200"
                borderWidth="1"
                h='150px'
                _dark={{}}
                _web={{ shadow: 5, borderWidth: 0 }}
                _light={{ backgroundColor: "gray.50" }}
              >
                <TouchableOpacity onPress={handleSelectImageFromGallery}>
                  <Box borderRightWidth={1} borderRightColor="coolGray.200" padding={4} alignItems='center' justifyContent='center'>
                    <MaterialIcons name="drive-folder-upload" size={50} color="black" />
                    <Text>Faça upload da imagem</Text>
                  </Box>

                </TouchableOpacity>
                <Box>

                </Box>
                <View>
                  {imagem && <Image source={{ uri: imagem }} style={{ width: 130, height: 130 }} alt='Imagem do produto' />}
                </View>
              </Box>

              <Button mb={30} mt={20} onPress={handleSalvarTudo}>
                Salvar
              </Button>

            </Box>



          </Box>
        </Box>
      </ScrollView>

    </Box>
  );
};

export default CadastroProdutoScreen;









