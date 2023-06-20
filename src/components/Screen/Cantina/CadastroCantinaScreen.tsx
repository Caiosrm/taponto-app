import React, { useContext } from 'react'

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CantinaContext } from '../../../contexts/CantinaContext';
import { ClienteContext } from '../../../contexts/ClienteContext';
import { RootStackParamList } from '../../../routes/types';
import { Button, Text, View } from 'native-base';





export const CadastroCantinaScreen = () => {
  /*===================================================================================================*/
  /* state's
  /*===================================================================================================*/
const {cantina, atualizarCantina} = useContext(CantinaContext);






  return (
    <View>
      <Text>TODO: implementar </Text>
    </View>
  )
}
