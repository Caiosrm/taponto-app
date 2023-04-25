import { Avatar, Box, HStack, Heading, Spacer, VStack, View, useTheme, Text, FlatList, NativeBaseProvider, StatusBar, Container, ScrollView } from "native-base";
import AppBar from "../../Common/AppBar";
import React, { useContext, useState } from 'react';
import CardapioScreen from "../Cardapio";
import { IHomeScreenProps } from "./types";
import { data } from "../../../__mocks__/data";
import theme, { colors } from "../../../themes/Theme";
import { useColorMode } from "../../../themes/ThemeContext";
import { ThemeContext, ThemeProvider } from "../../../themes/ThemeContext";

const HomeScreen = (props: IHomeScreenProps) => {

    //===================================================== State's ==========================================================
    const [colorMode] = useColorMode();
    

    return (
        <ThemeProvider>
            <StatusBar />
            <AppBar pageTitle={"Home"} />

            
            
                
                <Box background='#782e0a'  >
            <Heading color='white' marginTop={5} fontSize="lg" marginBottom={6} paddingX={4}>Ultimas Cantinas</Heading>
                    <FlatList marginBottom={6}
                        horizontal={true}
                        data={data}
                        renderItem={({ item }) => <Box
                           
                            >
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
                                    color="white">
                                    {item.nomerestaurante}
                                </Text>
                            </HStack>
                        </Box>} />
               

                        
                    <Box padding={3}   backgroundColor={colors.light.background}>
                    <Heading fontSize="lg" paddingX={4}>Cantinas</Heading>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <Box
                            _dark={{ borderColor: "muted.50" }}
                            borderColor="muted.800"
                            
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
                        </Box>
                        
                        
                
                
                
                
            
        </ThemeProvider>

    );
};

export default HomeScreen;