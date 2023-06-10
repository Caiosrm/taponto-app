import React, { useState } from 'react';
import { View, Text, Box, Image, FormControl, Input, TextArea, Select, ScrollView, Button, Icon } from 'native-base';
import { TextInput } from 'react-native';
import { postProduto } from '../../../api/utils/post/postProduct';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Logocantina from '../../../../assets/Rectangle229.png'
import { colors } from '../../../themes/Theme';
import { CardapioType } from '../../../api/types/CardapioType';

const CadastroProdutoScreen = () => {
  const [nome, setNome] = React.useState<string>('');
  const [preco, setPreco] = React.useState<string>('');
  const [cardapio, setCardapio] = React.useState<CardapioType[]>();


  const handleCadastroProduto = async () => {
    try {
      if (nome && preco) {
        const novoProduto = {
          nome: nome,
          preco: preco
        };

        await postProduto(novoProduto);

        console.log('Produto cadastrado com sucesso!');
        setNome('');
        setPreco('');
      } else {
        console.log('Por favor, preencha todos os campos.');
      }
    } catch (error) {
      console.log('Erro ao cadastrar produto:', error);
    }
  };

  return (
    <Box>
      <Box h={'150px'} bg={colors.light.azulTurquesa} alignItems='center' justifyContent='space-around' flexDirection='row'>
        <Ionicons name="arrow-back-circle-outline" size={40} color={colors.light.brancoPuro} />
        <Text color={colors.light.brancoPuro} fontSize='18px'>Cadastrar produto</Text>
        <Image source={Logocantina} alt='Logo da cantina' />

      </Box>
      <Box mt={5} alignItems='center'>

        <Box padding={5} w='363px' h='591px' borderRadius='24px' bg={colors.light.brancoPuro}  >

          <ScrollView>
            <FormControl>
              <FormControl>
                <FormControl.Label>Nome do produto</FormControl.Label>
                <Input placeholder='Produto' >
                </Input>
              </FormControl>

              <FormControl.Label>Descrição</FormControl.Label>
              <Box alignItems="center" w="100%">
                <TextArea h={20} placeholder="Text Area Placeholder" autoCompleteType={undefined} />
              </Box>
              <FormControl.Label>Valor de venda</FormControl.Label>
              <Input placeholder='R$ 0,00' />

              <FormControl.Label>Categoria</FormControl.Label>
              <Input placeholder='Selecione a categoria' />

              <FormControl.Label>Código de barra</FormControl.Label>
              <Box alignItems='center' flexDirection='row'>
                <Input mr={3} w="270px"/>
                
                  <Icon as={Ionicons} name='ios-barcode-outline' size={10} />

              </Box>


              <FormControl.Label>Estoque atual</FormControl.Label>
              <Input />

              <FormControl.Label>Valor de compra (Preço de custo)</FormControl.Label>
              <Input placeholder='R$ 0,00' />

              <FormControl>
                <FormControl.Label>Exibir no catálogo</FormControl.Label>
                <Select>
                  <Select.Item label="Sim" value="ux" /> {/*TODO: criar função de ocultar um item do cardápio*/}
                  <Select.Item label="Não" value="cross" />


                </Select>


              </FormControl>
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
                  <Text>Faça upload da imagem</Text>

                </Box>

              </Box>




            </FormControl>
            <Button mt={5}>Salvar</Button>
          </ScrollView>


        </Box>
      </Box>

    </Box>
  );
};

export default CadastroProdutoScreen;



