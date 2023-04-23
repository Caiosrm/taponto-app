import { View, useTheme } from "native-base";
import AppBar from "../../Common/AppBar";
import React, { useState } from 'react';
import CardapioScreen from "../Cardapio";
import { IHomeScreenProps } from "./types";


const HomeScreen = (props: IHomeScreenProps) => {
    //===================================================== State's ===========================================================
    const { colors } = useTheme(); // Esquema de Cores
    const [ThemeMode, setThemeMode] = useState('light'); // Modo de cor da aplicação

    
    //===================================================== useEffect's =======================================================


    //===================================================== HandleChange's ====================================================



    return (
        <View>
            <AppBar pageTitle={"Home"} />
        </View>
    );
};



export default HomeScreen;