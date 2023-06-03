import { Avatar, Box, Heading, Text, FlatList, StatusBar, ScrollView, Badge } from "native-base";
import TopBar from "../../Common/TopBar";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import React, { useEffect, } from 'react';
import { IHomeScreenProps } from "./types";
import { colors } from "../../../themes/Theme";
import { ThemeProvider, useTheme } from "../../../themes/ThemeContext";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ListarCardapio from "../Cardapio/ListarCardapio";
import { RootStackParamList } from "../../../routes/types";
import { HeaderBemVindo } from "./components/HeaderBemVindo";
import { PoloAtual } from "./components/PoloAtual";
import { caroselitem } from "../../../__mocks__/data";
import { getAllShop } from "../../../api/utils/get/getAllShop";
import { CantinaType } from "../../../api/types/ShopType";
import TabNavigator from "../../../routes/AppNavigation";


const HomeScreen = (props: IHomeScreenProps) => {

    const navigation = useNavigation<RootStackParamList>();

    const [cantinas, setCantinas] = React.useState<CantinaType[]>();

    const { colorMode, toggleColorMode } = useTheme();



    const { width } = Dimensions.get('window')





    useEffect(() => { //USE EFFECT INICIAL
        const fetchData = async () => {
            const data = await getAllShop();
            setCantinas(data);

        };
        fetchData();
    }, []);


    return (

        <ThemeProvider>
            <StatusBar />
            <GestureHandlerRootView style={{ flex: 1 }}>

                <TopBar />

                <ScrollView marginBottom={12}>


                    <HeaderBemVindo />

                    <PoloAtual />

                    <Box //CANTINAS ABERTAS AGORA
                        backgroundColor={colors.light.brancoPuro} marginBottom={5}>
                        <Heading marginTop={5} fontSize="sm" paddingX={4}>
                            Aberto agora
                        </Heading>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => String(item)}
                            pagingEnabled
                            horizontal
                            data={cantinas}
                            renderItem={({ item }) =>
                                <Box padding={5} >
                                    <Box
                                        flexDirection='column'
                                        alignItems='center'
                                    >
                                        <Avatar />
                                        <Text
                                            textAlign='center'
                                            fontSize="xs"
                                            color="black"
                                            onPress={() => navigation.navigate(ListarCardapio)}
                                        >
                                            {item.nome}
                                        </Text>
                                    </Box>
                                </Box>
                            }
                        />
                    </Box>

                    <FlatList //CARROSSEL DE PRODUTOS
                        marginBottom={6}
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment="start"
                        snapToOffsets={[...Array(caroselitem.length)].map((x, i) => i * (width * 0.8 - 40) + (i - 1) * 40)}
                        scrollEventThrottle={16}
                        decelerationRate='fast'
                        horizontal
                        data={caroselitem}
                        renderItem={({ item }) => (
                            <Box style={{
                                backgroundColor: item,
                                borderRadius: 12,
                                height: width / 2.6,
                                width: width * 0.8 - 20,
                                marginHorizontal: 10
                            }}>
                                <Text textAlign='center' >Aqui vai a imagem</Text>
                            </Box>
                        )}
                    />


                    <Box //CANTINAS
                        justifyContent='space-between'
                        padding={3}
                        backgroundColor={colors.light.background}
                        flex={1}
                    >

                        <Heading marginBottom={5} fontSize="lg">
                            Cantinas
                        </Heading>

                        <Box>
                            <FlatList data={cantinas} renderItem={({ item }) => (
                                <Box alignItems='center' flexDirection='row' py="2">
                                    <Avatar />
                                    <Box marginLeft="2">
                                        <Text
                                            fontSize="md"
                                            _dark={{ color: "warmGray.50" }}
                                            color="coolGray.800"
                                        >
                                            {item.nome}
                                        </Text>
                                        <Text
                                            fontSize="sm"
                                            _dark={{ color: "warmGray.50" }}
                                            color="coolGray.600"
                                        >
                                            <Badge colorScheme="success" size={"sm"} alignSelf="center" variant={"outline"}>
                                                {item.status}
                                            </Badge>
                                        </Text>
                                        <Box alignItems='center' flexDirection='row' >
                                            <Ionicons name='ios-star' size={15} color='#fcbb01' />
                                            <Text marginLeft={2}>
                                                {item.avaliacoes.nota}
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Box marginLeft="auto">
                                        <Ionicons name='heart-outline' size={15} color='red' />
                                    </Box>
                                </Box>
                            )}
                            />
                        </Box>
                    </Box>


                </ScrollView>
            <TabNavigator />
            </GestureHandlerRootView>
        </ThemeProvider>
    );
};

export default HomeScreen;