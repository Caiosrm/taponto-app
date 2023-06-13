import { Feather } from '@expo/vector-icons';
import { Badge } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../themes/Theme';
import SacolaScreen from '../../Screen/Sacola';
interface BotaoSacolaProps {
  itensNaSacola: number;
}

const BotaoSacola: React.FC<BotaoSacolaProps> = ({ itensNaSacola }) => {
  const navigation = useNavigation();

  const handleBotaoSacola = () => {
    navigation.navigate('Sacola');
  };

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
  );
};

export default BotaoSacola;
