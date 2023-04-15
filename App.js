
import { NativeBaseProvider } from "native-base";
import Login from "./src/components/Auth/login/LoginForm";
import AppNavigator from './src/components/Routes/Navigation';


export default function App() {

  return (
    <AppNavigator>
      <NativeBaseProvider>

      </NativeBaseProvider>
    </AppNavigator>
  );

}