import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { Button, HStack } from 'native-base';
import { ICantinaScreenProps } from './types';
import TopBar from '../../Common/TopBar';


export default function CantinaScreen(props: ICantinaScreenProps) {

  const navigation = useNavigation();
  
  return (
    <HStack>
      <TopBar/>
      
    </HStack>
  );
}
