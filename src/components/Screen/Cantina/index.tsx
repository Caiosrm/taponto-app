import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { Button, HStack, View } from 'native-base';
import { ICantinaScreenProps } from './types';
import TopBar from '../../Common/TopBar';
import ListarCardapio from './ListarCardapio';


export default function CantinaScreen() {

  const navigation = useNavigation();

  return (
      <View>
        <TopBar />
        <ListarCardapio />
      </View>
  );
}
