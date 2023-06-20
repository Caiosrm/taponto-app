import { Box, View, Text, Image } from 'native-base'
import React from 'react'
import { colors } from '../../../themes/Theme'
import BotaoVoltar from '../Buttons/BotaoVoltar'
import BotaoSacola from '../Buttons/BotaoSacola';
import { AntDesign, Entypo } from '@expo/vector-icons';

type HeaderCantinaProps = {
    pageTitle: string;
};


export const Header: React.FC<HeaderCantinaProps> = ({ pageTitle }) => {
    const [totalItens, setTotalItens] = React.useState<number>(0);

    return (
        <View>
            <Box h={'150px'} bg={colors.light.azulTurquesa} alignItems='center' justifyContent='space-around' flexDirection='row'>
                <BotaoVoltar />
                <Text color={colors.light.brancoPuro} fontSize={'18px'}>
                    {pageTitle}
                </Text>
                <BotaoSacola itensNaSacola={totalItens} />

            </Box>
        </View>
    );
};