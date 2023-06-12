import { Ionicons } from '@expo/vector-icons'
import { Box, View, Text, Image } from 'native-base'
import React from 'react'
import { colors } from '../../../themes/Theme'
import Logocantina from '../../../../assets/Rectangle229.png'
import { useNavigation } from '@react-navigation/native'

type HeaderCantinaProps = {
    pageTitle: string;
};



export const HeaderCantina: React.FC<HeaderCantinaProps> = ({ pageTitle }) => {




    return (
        <View>
            <Box h={'150px'} bg={colors.light.azulTurquesa} alignItems='center' justifyContent='space-around' flexDirection='row'>
                <Ionicons name="arrow-back-circle-outline" size={40} color={colors.light.brancoPuro}  />
                <Text color={colors.light.brancoPuro} fontSize={'18px'}>
                    {pageTitle}
                </Text>
                <Image source={Logocantina} alt='Logo da cantina' />
            </Box>
        </View>
    );
};