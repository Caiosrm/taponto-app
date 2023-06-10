import React, { useState } from 'react';
import { View, Text, Box, Image } from 'native-base';
import { Button, TextInput } from 'react-native';
import { postProduto } from '../../../api/utils/post/postProduct';
import { Ionicons } from '@expo/vector-icons';
import Logocantina from '../../../../assets/Rectangle229.png'
import { colors } from '../../../themes/Theme';

const CadastroProdutoScreen = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

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
    <Box h={80} bg={colors.light.azulTurquesa} alignItems='center' justifyContent='space-between' flexDirection='row'>
    <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
    <Text>Cadastro de produtos</Text>
    <Image source={Logocantina} alt='Logo da cantina'/>

    </Box>
    
   </Box>
  );
};

export default CadastroProdutoScreen;

