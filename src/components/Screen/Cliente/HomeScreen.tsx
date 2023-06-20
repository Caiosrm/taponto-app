import { Avatar, Box, Heading, Text, FlatList, StatusBar, ScrollView, Badge } from "native-base";
import TopBar from "../../Common/TopBar";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import React, { useEffect, } from 'react';
import { colors } from "../../../themes/Theme";
import { ThemeProvider, useTheme } from "../../../themes/ThemeContext";
import { Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../routes/types";
import { HeaderBemVindo } from "../../Common/Header/HeaderBemVindo";

import { getAllShop } from "../../../api/utils/get/getAllShop";
import { CantinaType } from "../../../api/types/CantinaType";
import PoloAtual from "../../Common/PoloAtual";


const HomeScreen = () => {

    const navigation = useNavigation<RootStackParamList>();
    const [cantinas, setCantinas] = React.useState<CantinaType[]>();
    const { colorMode, toggleColorMode } = useTheme();
    const { width } = Dimensions.get('window');
    const [idCantina, setIdCantina] = React.useState<string>();


    const obterDados = async () => {
        const data = await getAllShop();
        setCantinas(data);
    };

    const renderStars = (nota: number) => {
        console.log(nota)
        const stars = [];
        const wholeStars = Math.floor(nota);
        const halfStar = nota - wholeStars >= 0.5;

        // Render estrelas cheias
        for (let i = 0; i < wholeStars; i++) {
            stars.push(
                <Ionicons key={i} name="ios-star" size={13} color="#fcbb01" />
            );
        }

        // Render meia estrela, se necessário
        if (halfStar) {
            stars.push(
                <Ionicons key={wholeStars} name="ios-star-half" size={13} color="#fcbb01" />
            );
        }

        return stars;
    };

    useEffect(() => { //USE EFFECT INICIAL
        obterDados();

    }, []);

    useEffect(() => {
        console.log(cantinas)

    }, [cantinas])

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

                                        <TouchableOpacity onPress={() => {
                                            if (item.status !== "Fechado") {
                                                navigation.navigate("ListarCardapio", { cantinaId: item.id });
                                            }
                                        }}
                                            disabled={item.status === "Fechado"}
                                        >
                                            <Avatar source={item.imagem} />
                                            <Text
                                                textAlign='center'
                                                fontSize="xs"
                                                color="black"
                                            >
                                                {item.nome}
                                            </Text>
                                        </TouchableOpacity>
                                    </Box>
                                </Box>
                            }
                        />
                    </Box>

                    {/* <FlatList //CARROSSEL DE PRODUTOS
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
                    /> */}

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
                                <TouchableOpacity
                                    onPress={() => {
                                        if (item.status !== "Fechado") {
                                            navigation.navigate("ListarCardapio", { cantinaId: item.id });
                                        }
                                    }}
                                    disabled={item.status === "Fechado"}
                                >
                                    <Box
                                        alignItems='center'
                                        flexDirection='row'
                                        py="2"
                                    >
                                        <Avatar size={'md'} source={item.imagem} />
                                        <Box marginLeft="2" flexDirection={'column'}>
                                            <Box flexDirection={'row'}>
                                                <Text
                                                    fontSize="md"
                                                    _dark={{ color: "warmGray.50" }}
                                                    color="coolGray.800"
                                                >
                                                    {item.nome}
                                                </Text>

                                            </Box>
                                            <Box flexDir={'row'}>
                                                <Text
                                                    fontSize="xs"
                                                    _dark={{ color: "warmGray.50" }}
                                                    color="coolGray.600"
                                                >
                                                    <Badge colorScheme="success" size={"xs"} alignSelf="center" variant={"outline"}>
                                                        {item.status}
                                                    </Badge>
                                                </Text>

                                                <Box marginLeft={2} alignSelf="center" flexDir={"row"} >
                                                    {renderStars(item.notaGeral)}
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box marginLeft="auto">
                                            <Ionicons name='heart-outline' size={15} color='red' />
                                        </Box>
                                    </Box>
                                </TouchableOpacity>
                            )}
                            />
                        </Box>
                    </Box>

                </ScrollView>
            </GestureHandlerRootView>
        </ThemeProvider>
    );
};

export default HomeScreen;