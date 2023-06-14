import { Feather } from '@expo/vector-icons';
import { Badge } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../themes/Theme';
import SacolaScreen from '../../Screen/Sacola';
import { ProdutoType } from '../../../api/types/ProdutoType';
interface BotaoSacolaProps {
  itensNaSacola: number;
}

const BotaoSacola: React.FC<BotaoSacolaProps> = ({ itensNaSacola }) => {
  const navigation = useNavigation();

  const handleBotaoSacola = () => {
    navigation.navigate('SacolaScreen');
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
