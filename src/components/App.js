
import { NativeBaseProvider, } from "native-base";
import Login from "./Auth/login/LoginForm";
import AppNavigation from '../../Navigation';

export default function App() {
  return (
    <AppNavigation>
      <NativeBaseProvider>

        <Login />
        
      </NativeBaseProvider>
    </AppNavigation>
  );
}

