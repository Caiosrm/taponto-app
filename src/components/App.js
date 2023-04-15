
import { NativeBaseProvider } from "native-base";
import Login from "./Auth/login/LoginForm";
import AppNavigator from '../../Navigation';

export default function App() {
  return (
    <AppNavigator>
      <NativeBaseProvider>
      </NativeBaseProvider>
    </AppNavigator>
  );
}

