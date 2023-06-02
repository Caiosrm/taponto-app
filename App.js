import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "./src/themes/ThemeContext";
import TabNavigator, { StackNavigator } from "./src/routes/AppNavigation";

const App = () => {
  return (
    <NativeBaseProvider>
      <ThemeProvider>
        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
};

export default App;