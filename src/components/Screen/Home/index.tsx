import { View, useTheme } from "native-base";
import AppBar from "../../Common/AppBar";
import React, { useState } from 'react';
import CardapioScreen from "../Cardapio";
import { IHomeProps } from "./types";


const HomeScreen = (props: IHomeProps) => {

    //================================================================
    //STATES
    //================================================================
    const { colors } = useTheme();
    const [ThemeMode, setThemeMode] = useState('light'); // State do modo de cor da aplicação


    return (
        <View>
            <AppBar pageTitle={"Home"} />
        </View>
    );
};



export default HomeScreen;