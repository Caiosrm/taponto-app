import React, { SetStateAction, useEffect } from "react";
import { View, Text, Box, FlatList, Avatar, Button, HStack, Icon, Spacer, VStack, Center, ScrollView, Image } from "native-base";
import { ISacolaScreenProps } from "./types";
import TopBar from "../../Common/TopBar";
import { colors } from "../../../themes/Theme";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Logo from '../../../../assets/logorestaurante.jpg'
import { selectImageFromGallery } from "../../Common/ImageUpload/Upload";
import { ProdutoType } from "../../../api/types/ProdutoType";
import { SacolaType } from "../../../api/types/SacolaType";
import { getCardapio } from "../../../api/utils/get/getCardapio";



const SacolaScreen = (props: ISacolaScreenProps) => {
    /*===================================================================================================*/
    /* States
    /*===================================================================================================*/
    const [sacola, setSacola] = React.useState<ProdutoType[]>(props?.produtosNaSacola);
    const [valorTotal, setValorTotal] = React.useState<number>(props.valorTotal);
    const [cantinaId, setCantinaId] = React.useState<string>('');

    /*===================================================================================================*/
    /* useEffect's
    /*===================================================================================================*/
    useEffect(() => { //Request Inicial
        const fetchData = async () => {
            const sacola = await getCardapio(cantinaId);
            setSacola(sacola);
        };
        fetchData();
    }, []);

    const handleQuantityChange = (index: number, value: string) => {
        const novosItens = [...sacola];
        novosItens[index] = {
            ...novosItens[index],
            quantidade: parseInt(value, 10)
        };
        setSacola(novosItens);
    };

    return (

        <View>
            <HStack>

            </HStack>
        </View>

    );
};

export default SacolaScreen;