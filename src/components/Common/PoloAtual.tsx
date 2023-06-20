import { Ionicons } from '@expo/vector-icons';
import { Box, Text } from 'native-base'
import React, { useRef } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../themes/Theme';
import { Modalize } from "react-native-modalize";


export const PoloAtual = () => {

    const modalizeRef = useRef<Modalize>(null);

    const onOpenModal = () => { modalizeRef.current?.open() };

    return (
        <Box //POLO ATUAL
            bg={colors.light.azulTurquesa}>
            <TouchableOpacity onPress={onOpenModal}>
                <Box marginLeft={5} alignItems='center' marginBottom={5} flexDirection={'row'}>
                    <Ionicons name='location' size={24} color='red' />
                    <Text color={colors.light.brancoPuro} marginX={1}>
                        Polo Via Corpvs
                    </Text>
                    <Ionicons name='caret-down' size={15} color='red' />
                </Box>
            </TouchableOpacity>
        </Box>
    )
}
