import { Avatar, Box, HStack, Heading, Spacer, VStack, View, useTheme, Text, FlatList, NativeBaseProvider, StatusBar } from "native-base";
import AppBar from "../../Common/AppBar";
import React, { useState } from 'react';
import CardapioScreen from "../Cardapio";
import { IHomeScreenProps } from "./types";
import { data } from "../../../__mocks__/data";
import theme, { colors } from "../../../themes/Theme";
import { useColorMode } from "../../Common/AppBar/states";

const HomeScreen = (props: IHomeScreenProps) => {

    //===================================================== State's ===========================================================
    const [colorMode, toggleColorMode] = useColorMode();

    function handleToggleTheme() {
        if (colorMode === "light") {
            toggleColorMode("dark");
        } else {
            toggleColorMode("light");
        }
    }

    return (
        <NativeBaseProvider theme={theme}>
            <StatusBar />
            <AppBar pageTitle={"Home"} />
            <Heading marginTop={5} fontSize="lg" paddingX={4}>Ultimas Lojas</Heading>
            <Box
                w='100%'
                paddingY={4}
                borderRadius={4}
                >
                <FlatList
                    horizontal={true}
                    data={data}
                    renderItem={({ item }) => <Box
                        _dark={{ borderColor: "muted.50" }}
                        borderColor="muted.800"
                        pl={["0", "4"]}
                        pr={["0", "5"]}
                        py="2">
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
                                _dark={{ color: "warmGray.50" }}
                                color="coolGray.800">
                                {item.nomerestaurante}
                            </Text>
                        </HStack>
                    </Box>} />
            </Box>
            <Box flex={1} w='100%' paddingY={4} marginBottom={6} borderRadius={4} >
                <Heading fontSize="lg" paddingX={4}>Lojas</Heading>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Box
                        _dark={{ borderColor: "muted.50" }}
                        borderColor="muted.800"
                        pl={["0", "4"]}
                        pr={["0", "5"]}
                        py="2">
                        <HStack alignItems='center'>
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
                                fontSize="md"
                                _dark={{ color: "warmGray.50" }}
                                color="coolGray.800">
                                {item.nomerestaurante}
                            </Text>
                        </HStack>
                    </Box>} />
            </Box>
        </NativeBaseProvider>

    );
};

export default HomeScreen;