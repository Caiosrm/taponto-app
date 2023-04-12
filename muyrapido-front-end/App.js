
import { NativeBaseProvider,   } from "native-base";
import Login from "./src/componentes/login";

export default function App() {
  return (
    <NativeBaseProvider>
      
      <Login/>
    </NativeBaseProvider>
  );
}

