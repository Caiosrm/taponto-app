import { ScrollView } from 'native-base'
import React, { useContext } from 'react'
import { HeaderCantina } from '../../Common/Header/HeaderCantina'
import { CantinaType, initialStateCantina } from '../../../api/types/CantinaType'
import { CantinaContext } from '../../../contexts/CantinaContext';
import { ClienteContext } from '../../../contexts/ClienteContext';




export const PainelCantinaScreen = () => {
  /*===================================================================================================*/
  /* state's
  /*===================================================================================================*/
  const [cantina, setCantina] = React.useState<CantinaType>(initialStateCantina);





  return (
    <ScrollView>
        <HeaderCantina pageTitle={cantina.nome}/>


        
    </ScrollView>
  )
}
