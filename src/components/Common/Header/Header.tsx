import { Box, View, Text, Image } from 'native-base'
import React from 'react'
import { colors } from '../../../themes/Theme'
import BotaoVoltar from '../Buttons/BotaoVoltar'

type HeaderCantinaProps = {
    pageTitle: string;
};


export const Header: React.FC<HeaderCantinaProps> = ({ pageTitle }) => {

    return (
        <View>
            <Box h={'150px'} bg={colors.light.azulTurquesa} alignItems='center' justifyContent='space-around' flexDirection='row'>
                <BotaoVoltar />
                <Text color={colors.light.brancoPuro} fontSize={'18px'}>
                    {pageTitle}
                </Text>
            </Box>
        </View>
    );
};