import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "./src/themes/ThemeContext";
import { WrapperNavigation } from "./src/contexts/WrapperNavigatorContext";

const App = () => {
  return (
    <NativeBaseProvider>
      <ThemeProvider>
        <NavigationContainer>
          <WrapperNavigation/>
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
};

export default App;