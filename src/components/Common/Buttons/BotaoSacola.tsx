import { Feather } from '@expo/vector-icons';
import { Badge } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../themes/Theme';
import SacolaScreen from '../../Screen/Cliente/SacolaScreen';
import { ProdutoType } from '../../../api/types/ProdutoType';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes/types';

interface BotaoSacolaProps {
  itensNaSacola: number;
  navigation?: StackNavigationProp<RootStackParamList, 'SacolaScreen'>;
}


const BotaoSacola: React.FC<BotaoSacolaProps> = ({ itensNaSacola }, props: BotaoSacolaProps) => {
  const navigation = useNavigation();

  const handleBotaoSacola = () => {
    if (props.navigation) { 
      props.navigation.navigate('SacolaScreen'); 
    }
  };

  return (
    <>
      <Feather
        name='shopping-bag'
        key={'shopping-bag-icon'}
        size={30}
        color={colors.light.brancoPuro}
        onPress={handleBotaoSacola} />
      {itensNaSacola > 0 && (
        <Badge
          key='shopping-bag-badge'
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
