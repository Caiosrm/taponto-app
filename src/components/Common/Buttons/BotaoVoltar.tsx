import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../themes/Theme';


const BotaoVoltar: React.FC = () => {
    const navigation = useNavigation();

    const handleVoltar = () => {
        navigation.goBack();
    };

    return (
            <Ionicons 
            name="arrow-back-circle-outline" 
            key='arrow-back-circle-outline-icon'
            size={35} 
            color={colors.light.brancoPuro} 
            onPress={handleVoltar} 
            />
    );
};

export default BotaoVoltar;