import { Avatar, Box, HStack, Heading, Spacer, VStack, View, useTheme, Text, FlatList, NativeBaseProvider, StatusBar } from "native-base";
import AppBar from "../../Common/AppBar";
import React, { useState } from 'react';
import CardapioScreen from "../Cardapio";
import { IHomeScreenProps } from "./types";


const HomeScreen = (props: IHomeScreenProps) => {
    //===================================================== State's ===========================================================
    const { colors } = useTheme(); // Esquema de Cores
    const [ThemeMode, setThemeMode] = useState('light'); // Modo de cor da aplicação

    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        nomerestaurante: "Habib's",
        avatarUrl: "https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/8fd4ee58-1354-4399-9bbc-85ee4eb6a020/202302141950_GEqO_i.jpg"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        nomerestaurante: "Chickens Mequi",
        avatarUrl: "https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/6650ca18-c838-4dd3-9ac0-011eb89e46a8/202206011938_zDwi_i.jpg"
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        nomerestaurante: "Harng burguer",
        avatarUrl: "https://static.ifood-static.com.br/image/upload/t_medium/logosgde/fdd109c2-e963-4e47-88f2-238cd8b399d6/202304162209_Jox3_i.jpg?imwidth=128"
    }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        nomerestaurante: "Laçai",
        avatarUrl: "https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/c09c97c6-60db-43a2-aac6-c73e5d22e212/202106152022_4y7Q_.jpeg"
    },
    {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        nomerestaurante: "Santa pastelaria",
        avatarUrl: "https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/8edb688a-cb3a-4ee2-9ea6-e94fae5bd6c7/202201301649_LG52_i.jpg"
    },
    {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",

        nomerestaurante: "Dom Gourmet",

        avatarUrl: "https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/8a52f11e-1d31-42cf-acdc-e4ae95f1d578/202209022353_YI4g_i.jpg"
    },

    ];


    return (
        <NativeBaseProvider>
            <StatusBar />
            <AppBar pageTitle={"Home"} />
            <Heading marginTop={5} fontSize="lg" paddingX={4}>Ultimas Lojas</Heading>


            <Box w='100%' paddingY={4} borderRadius={4} >

                <FlatList horizontal={true} data={data} renderItem={({
                    item
                }) => <Box _dark={{
                    borderColor: "muted.50"
                }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                        <HStack flexDirection='column' alignItems='center'    >
                            <Avatar marginLeft={3} height={16} width={16} size="48px" source={{
                                uri: item.avatarUrl
                            }} />


                            <Text marginLeft={3} textAlign='center' fontSize="xs" _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800">
                                {item.nomerestaurante}
                            </Text>
                        </HStack>
                    </Box>} />
            </Box>


            <Box flex={1} w='100%' paddingY={4} marginBottom={6} borderRadius={4} >
                <Heading fontSize="lg" paddingX={4}>Lojas</Heading>

                <FlatList data={data} renderItem={({
                    item
                }) => <Box _dark={{
                    borderColor: "muted.50"
                }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                        <HStack alignItems='center'    >
                            <Avatar marginLeft={3} height={16} width={16} size="48px" source={{
                                uri: item.avatarUrl
                            }} />


                            <Text marginLeft={3} textAlign='center' fontSize="md" _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800">
                                {item.nomerestaurante}
                            </Text>
                        </HStack>
                    </Box>} />
            </Box>
        </NativeBaseProvider>

    );
};



export default HomeScreen;