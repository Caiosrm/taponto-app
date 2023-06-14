import { Avatar, Box, Button, ScrollView } from "native-base";
import AppBar from "../../Common/TopBar";
import { Text } from 'native-base'
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../themes/Theme";

import TopBar from "../../Common/TopBar";
import { ProdutoType } from "../../../api/types/ProdutoType";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../routes/types";
import { Header } from "../../Common/Header/Header";



const ItemDetalhado: React.FC = () => {
    /*===================================================================================================*/
    /* state's
    /*===================================================================================================*/
    const [produto, setProduto] = React.useState<ProdutoType>();
    
    const navigation = useNavigation<RootStackParamList>();



    /*===================================================================================================*/
    /* useEffect's
    /*===================================================================================================*/
    useEffect(() => {

    }, [])



    /*===================================================================================================*/
    /* handleChange's
    /*===================================================================================================*/


    
    return (
        <ScrollView>

        </ScrollView>
    );
}

export default ItemDetalhado;