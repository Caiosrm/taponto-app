import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "./src/themes/ThemeContext";
import { WrapperNavigation } from "./src/routes/WrapperNavigatorContext";
import { CantinaProvider } from "./src/contexts/CantinaContext";
import { ClienteProvider } from "./src/contexts/ClienteContext";
import { AuthProvider } from "./src/contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
    <NativeBaseProvider>
      <ThemeProvider>
        <NavigationContainer>
          <ClienteProvider>
            <CantinaProvider>
              <WrapperNavigation/>
            </CantinaProvider>
          </ClienteProvider>
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
    </AuthProvider>
  );
};

export default App;
