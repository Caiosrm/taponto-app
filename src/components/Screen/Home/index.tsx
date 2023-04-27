import { Avatar, Box, HStack, Heading, useTheme, Text, FlatList, StatusBar, Image, ScrollView } from "native-base";
import AppBar from "../../Common/AppBar";
import { StyleSheet, } from 'react-native'

import React, { useContext, useState, } from 'react';
import CardapioScreen from "../Cardapio/ListarCardapio";
import { IHomeScreenProps } from "./types";
import { data } from "../../../__mocks__/data";
import theme, { colors } from "../../../themes/Theme";
import { useColorMode } from "../../../themes/ThemeContext";
import { ThemeContext, ThemeProvider } from "../../../themes/ThemeContext";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = (props: IHomeScreenProps) => {

    //===================================================== State's ==========================================================
    const [colorMode] = useColorMode();

    const caroselitem = [

        '#e78eea',
        '#7cdacb',
        '#6f31fe',
        '#784e8a',
        '#ef1541',
        '#b37784',




    ]
    const { width } = Dimensions.get('window')

    return (

        <ThemeProvider>
            <StatusBar />
            <ScrollView>
                <AppBar pageTitle={"Home"} />






                <Box backgroundColor={colors.light.brancoPuro} marginBottom={5}>
                    <Heading marginTop={5} fontSize="lg" paddingX={4}>Ultimas Cantinas</Heading>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        keyExtractor={(item) => String(item)}
                        horizontal
                        data={data}
                        renderItem={({ item }) => <Box padding={5}

                        >
                            <Box flexDirection='column' alignItems='center' >
                                <Avatar

                                    height={16}
                                    width={16}
                                    size="48px"
                                    source={{ uri: item.avatarUrl }}
                                />
                                <Text
                                    marginLeft={3}
                                    textAlign='center'
                                    fontSize="xs"
                                    color="black">
                                    {item.nomerestaurante}
                                </Text>


                            </Box>

                        </Box>} />
                </Box>








                <FlatList
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







                <Box justifyContent='space-between' padding={3} backgroundColor={colors.light.background} flex={1}>
                    <Heading marginBottom={5} fontSize="lg">Cantinas</Heading>

                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <Box alignItems='center' flexDirection='row' py="2">
                                <Avatar
                                    height={16}
                                    width={16}
                                    size="48px"
                                    source={{ uri: item.avatarUrl }}
                                />
                                <Box marginLeft="2">
                                    <Text
                                        fontSize="md"
                                        _dark={{ color: "warmGray.50" }}
                                        color="coolGray.800"
                                    >
                                        {item.nomerestaurante}
                                    </Text>
                                    <Text
                                        fontSize="sm"
                                        _dark={{ color: "warmGray.50" }}
                                        color="coolGray.600"
                                    >
                                        Aberto
                                    </Text>
                                    <Box alignItems='center'flexDirection='row' >
                                    <Ionicons name='ios-star' size={15} color='#fcbb01' />
                                    <Text marginLeft={2}>4,9</Text>
                                </Box>
                                </Box>
                                <Box marginLeft="auto">
                                    <Ionicons name='heart-outline' size={15} color='red' />
                                </Box>
                            </Box>
                        )}
                    />
                </Box>

            </ScrollView>







        </ThemeProvider>

    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: 'white'
    }
})