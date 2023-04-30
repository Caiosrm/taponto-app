import { Avatar, Box, HStack, Heading, Spacer, VStack, View, useTheme, Text, FlatList, NativeBaseProvider, StatusBar, Container, ScrollView, Input } from "native-base";
import AppBar from "../../Common/AppBar";
import React, { useContext, useState } from 'react';
import CardapioScreen from "../Cardapio/ListarCardapio";
import { IHomeScreenProps } from "./types";
import { data } from "../../../__mocks__/data";
import theme, { colors } from "../../../themes/Theme";
import { useColorMode } from "../../../themes/ThemeContext";
import { ThemeContext, ThemeProvider } from "../../../themes/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = (props: IHomeScreenProps) => {

    //===================================================== State's ==========================================================
    const [colorMode] = useColorMode();

    return (
        <ThemeProvider>
            <StatusBar />
            <AppBar pageTitle={props.pageTitle} />
            <ScrollView>
                <Box background={colors.light.azulTurquesa}>
                    <Box padding={5}>
                        <Box marginBottom={6} flexDirection='row' justifyContent='space-between'>
                            <Box>
                                <Heading color={colors.light.brancoPuro} >
                                    Olá, Alisson.
                                </Heading>
                                <Text color={colors.light.brancoPuro}>
                                    O que você quer pedir agora?
                                </Text>
                            </Box>
                            <Box>
                                <Avatar></Avatar>
                            </Box>
                        </Box>
                        <Input
                            fontSize={16}
                            bg='#e6e6e6'
                            borderWidth={0}
                            borderRadius={10}
                            padding={2}
                            placeholder="Prato ou cantina"
                            InputLeftElement={
                                <Box marginLeft={2}>
                                    <Ionicons name='search' size={24} color='red' />
                                </Box>
                            }
                            InputRightElement={
                                <Box marginRight={2}>
                                    <Ionicons name="filter" size={24} color="red" />
                                </Box>
                            }
                        />
                    </Box>
                    <Heading
                        color='white'
                        marginTop={5}
                        fontSize="sm"
                        marginBottom={6}
                        paddingX={4}
                    >Cantinas abertas agora
                    </Heading>
                    <FlatList
                        marginBottom={6}
                        horizontal={true}
                        data={data}
                        renderItem={({ item }) =>
                            <Box>
                                <HStack flexDirection='column' alignItems='center'>
                                    <Avatar
                                        marginLeft={3}
                                        height={16}
                                        width={16}
                                        size="48px"
                                        source={{ uri: item.avatarUrl }}
                                    />
                                    <Text
                                        marginLeft={3}
                                        textAlign='center'
                                        fontSize="xs"
                                        color="white"
                                    >
                                        {item.nomerestaurante}
                                    </Text>
                                </HStack>
                            </Box>
                        }
                    />
                    <Box
                        padding={3}
                        backgroundColor={colors.light.background}
                    >

                        <Heading
                            fontSize="lg"
                            paddingX={4}
                        >
                            Cantinas
                        </Heading>

                        <FlatList
                            data={data}
                            renderItem={({ item }) => <Box
                                _dark={{ borderColor: "muted.50" }}
                                borderColor="muted.800"
                                py="2"
                            >
                                <HStack>
                                    <Avatar
                                        marginLeft={3}
                                        height={16}
                                        width={16}
                                        size="48px"
                                        source={{ uri: item.avatarUrl }}
                                    />
                                    <Box>
                                        <Text
                                            marginLeft={3}
                                            fontSize="md"
                                            _dark={{ color: "warmGray.50" }}
                                            color="coolGray.800"
                                        >
                                            {item.nomerestaurante}
                                        </Text>
                                        <Text
                                            color={'green.300'}
                                            marginLeft={3}
                                            fontSize="sm"
                                        >
                                            {props.cantina?.status}
                                        </Text>
                                    </Box>
                                </HStack>
                            </Box>} />

                    </Box>
                </Box>
            </ScrollView>







        </ThemeProvider>

    );
};

export default HomeScreen;