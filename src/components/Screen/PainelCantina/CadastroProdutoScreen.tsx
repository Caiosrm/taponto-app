import React, { useEffect, useState } from 'react';
import { View, Text, Box, Image, FormControl, Input, TextArea, Select, ScrollView, Button, Icon } from 'native-base';
import { TextInput, TouchableOpacity } from 'react-native';
import { postProduto } from '../../../api/utils/post/postProduct';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Logocantina from '../../../../assets/Rectangle229.png'
import { colors } from '../../../themes/Theme';
import { CardapioType } from '../../../api/types/CardapioType';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../../api/config/firebaseConfig';
import { getDownloadURL, uploadString, uploadBytes, UploadMetadata, ref } from 'firebase/storage';



const CadastroProdutoScreen = () => {
  const [nome, setNome] = React.useState<string>('');
  const [preco, setPreco] = React.useState<string>('');
  const [cardapio, setCardapio] = React.useState<CardapioType[]>();
  const [imagem, setImagem] = React.useState<any>();


  const uploadImage = async (base64Uri: string) => {
    const storageRef = ref(storage, 'nome_da_pasta/no_meu_storage');
    const metadata: UploadMetadata = {
      contentType: 'image/jpeg/png', // Defina o tipo de conteúdo correto da imagem
    };

    await uploadString(storageRef, base64Uri, 'data_url', metadata);

    const downloadURL = await getDownloadURL(storageRef);
    console.log('URL da imagem:', downloadURL);
  };

  const selectImageFromGallery = async () => {
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

  const salvarTudo = () => {
    uploadImage(imagem);
  }
  return (
    <Box>
      <Box h={'150px'} bg={colors.light.azulTurquesa} alignItems='center' justifyContent='space-around' flexDirection='row'>
        <Ionicons name="arrow-back-circle-outline" size={40} color={colors.light.brancoPuro} />
        <Text color={colors.light.brancoPuro} fontSize='18px'>Cadastrar produto</Text>
        <Image source={Logocantina} alt='Logo da cantina' />
      </Box>
      <ScrollView>
        <Box flex={1} alignItems='center'>

          <Box padding={5} bg={colors.light.brancoPuro}  >



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
            <Box>
              <FormControl.Label>Imagem do produto</FormControl.Label>
              <Box justifyContent='center' alignItems='center' borderRadius={10} h='100px' borderColor="coolGray.200" borderWidth="1" _dark={{
              }} _web={{
                shadow: 5,
                borderWidth: 0
              }} _light={{
                backgroundColor: "gray.50"
              }}>
                <MaterialIcons name="drive-folder-upload" size={50} color="black" />
                <View>
                  {imagem && <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />}
                </View>
                <Text>Faça upload da imagem</Text>
                <Button onPress={selectImageFromGallery}>upload</Button>

              </Box>

            </Box>







            <Button
              mb={20}
              mt={5}
              onPress={salvarTudo}
            >Salvar
            </Button>
          </Box>
        </Box>
      </ScrollView>

    </Box>
  );
};

export default CadastroProdutoScreen;









