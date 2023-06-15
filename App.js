import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "./src/themes/ThemeContext";
import { WrapperNavigation } from "./src/routes/WrapperNavigatorContext";
import { CantinaProvider } from "./src/contexts/CantinaContext";

const App = () => {
  return (
    <NativeBaseProvider>
      <ThemeProvider>
        <NavigationContainer>
          <ClienteProvider>
            <CantinaProvider>
              <WrapperNavigation />
            </CantinaProvider>
          </ClienteProvider>
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
};

export default App;
