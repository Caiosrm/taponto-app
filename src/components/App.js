
import { NativeBaseProvider } from "native-base";

import AppNavigator from '../../Navigation';
import { TEMAS } from './estilos/Temas';

export default function App() {
  return (
    <AppNavigator>
      <NativeBaseProvider backgroundColor={TEMAS.colors.blue[900]}>
        
      </NativeBaseProvider>
    </AppNavigator>
  ); 
}

