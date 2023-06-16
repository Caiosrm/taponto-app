import { ScrollView } from 'native-base'
import React, { useContext } from 'react'
import { HeaderCantina } from '../../Common/Header/HeaderCantina'
import { CantinaType } from '../../../api/types/CantinaType'
import { CantinaContext } from '../../../contexts/CantinaContext';
import { ClienteContext } from '../../../contexts/ClienteContext';




export const PainelCantinaScreen = () => {

  const [cantina, setCantina] = React.useState<CantinaType>();

  return (
    <ScrollView>
        <HeaderCantina pageTitle="nome da cantina"/>
    </ScrollView>
  )
}
