import { Ionicons } from '@expo/vector-icons'
import { Box, Heading, Avatar, Input, Text } from 'native-base'
import React from 'react'

import { colors } from '../../../themes/Theme';
import { useTheme } from '../../../themes/ThemeContext';

export const HeaderBemVindo = () => {

    const { colorMode, toggleColorMode } = useTheme();

    return (
        <Box //HEADER "BEM-VINDO"  
            bg={colors.light.azulTurquesa} padding={5}>
            <Box marginBottom={6} flexDirection='row' justifyContent='space-between'>
                <Box>
                    <Heading color={colorMode === 'light' ? colors.light.brancoPuro : colors.light.pretoPuro}>
                        Olá, Alisson.
                    </Heading>
                    <Text>
                        O que você quer pedir agora?
                    </Text>
                </Box>
                <Box>
                    <Avatar></Avatar>
                </Box>
            </Box>
            <Input placeholder="Prato ou cantina"
                fontSize={16}
                bg='#e6e6e6'
                borderWidth={0}
                borderRadius={10}
                padding={2}
                InputLeftElement={
                    <Box marginLeft={2}>
                        <Ionicons name='search' size={24} color='red' />
                    </Box>}
                InputRightElement={
                    <Box marginRight={2}>
                        <Ionicons name="filter" size={24} color="red" />
                    </Box>} />
        </Box>
    )
}