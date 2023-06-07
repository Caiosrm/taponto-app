import React, { useState } from 'react';
import { View } from 'native-base';
import { Button, TextInput } from 'react-native';

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
    <View>
      <TextInput
        placeholder="Nome do Produto"
        value={nome}
        onChangeText={(text: React.SetStateAction<string>) => setNome(text)}
      />
      <TextInput
        placeholder="Preço do Produto"
        value={preco}
        onChangeText={(text: React.SetStateAction<string>) => setPreco(text)}
      />
      <Button
        title="Cadastrar Produto"
        onPress={handleCadastroProduto}
      />
    </View>
  );
};

export default CadastroProdutoScreen;
function postProduto(novoProduto: { nome: string; preco: string; }) {
    throw new Error('Function not implemented.');
}

