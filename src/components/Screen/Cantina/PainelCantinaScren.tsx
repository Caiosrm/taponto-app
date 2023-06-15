import { ScrollView } from 'native-base'
import React from 'react'
import { HeaderCantina } from '../../Common/Header/HeaderCantina'
import { CantinaType } from '../../../api/types/CantinaType'

export const PainelCantinaScren = () => {

  const [cantina, setCantina] = React.useState<CantinaType>();

  return (
    <ScrollView>
        <HeaderCantina pageTitle="nome da cantina"/>
    </ScrollView>
  )
}
