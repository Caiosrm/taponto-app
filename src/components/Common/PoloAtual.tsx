import React, { useState } from 'react';
import { TouchableOpacity, Modal  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../themes/Theme';
import { Box, Text, View } from 'native-base';

const PoloAtual = () => {
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <Box bg={colors.light.azulTurquesa}>
            <TouchableOpacity onPress={handleOpenModal}>
                <Box
                    marginLeft={5}
                    alignItems='center'
                    marginBottom={5}
                    flexDirection='row'
                >
                    <Ionicons name='location' size={24} color='red' />
                    <Text color={colors.light.brancoPuro} marginX={1}>
                        Polo Via Corpvs
                    </Text>
                    <Ionicons name='caret-down' size={15} color='red' />
                </Box>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType='slide'>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>teste</Text>
                    <TouchableOpacity onPress={handleCloseModal}>
                        <Text>Fechar Modal</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </Box>
    );
};

export default PoloAtual;
