
import { NativeBaseProvider } from "native-base";
import AppNavigator from "./src/components/Routes/Navigation";




function App() {
  return (
    <AppNavigator>
        <NativeBaseProvider>

        </NativeBaseProvider>
    </AppNavigator>

  );
}

export default App;

