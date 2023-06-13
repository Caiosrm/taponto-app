import { Feather, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { colors } from '../../../themes/Theme'
import { useNavigation } from '@react-navigation/native';
import SacolaScreen from '../../Screen/Sacola';
import { Badge } from 'native-base';

const BotaoSacola: React.FC = ({ route, params }: any) => {

    const navigation: any = useNavigation();
    const itensNaSacola = route.params?.itensNaSacola || 0;

    const handleBotaoSacola = () => {
        navigation.navigate("Sacola");
    }

    return (
        <>
            <Feather name='shopping-bag' size={30} color={colors.light.brancoPuro} onPress={handleBotaoSacola} />
            {itensNaSacola > 0 && (
                <Badge
                    position='absolute'
                    bg='red.500'
                    borderRadius='full'
                    px={2}
                    fontSize='xs'
                    fontWeight='bold'
                >
                    {itensNaSacola}
                </Badge>
            )}
        </>
    )
}


export default BotaoSacola;