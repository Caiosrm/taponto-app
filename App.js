
import { StatusBar } from "native-base";
import AppNavigator from "./src/routes/Navigation";
import { NavigationContainer } from '@react-navigation/native'
import React from "react";


const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;

