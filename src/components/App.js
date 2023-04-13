
import { NativeBaseProvider, } from "native-base";
import Login from "./Auth/login";
import AppNavigation from '../../Navigation';

export default function App() {
  return (
    <AppNavigation>
      <NativeBaseProvider>
        <Box>Hello world</Box>
        <Login />
      </NativeBaseProvider>
    </AppNavigation>
  );
}

