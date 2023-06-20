import React, { useContext } from 'react'
import { ScrollView } from 'native-base'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CantinaContext } from '../../../contexts/CantinaContext';
import { ClienteContext } from '../../../contexts/ClienteContext';
import { RootStackParamList } from '../../../routes/types';
import { HeaderCantina } from '../../Common/Header/HeaderCantina';



export const PerfilClienteScreen = () => {
  const user = useContext(ClienteContext);
  const shop = useContext(CantinaContext);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <ScrollView>
      <HeaderCantina pageTitle='Meu Perfil'/>
    </ScrollView>
  )
}
