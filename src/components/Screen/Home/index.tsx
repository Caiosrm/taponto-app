import { Avatar, Box, HStack, Heading,  useTheme, Text, FlatList,  StatusBar ,Image, ScrollView } from "native-base";
import AppBar from "../../Common/AppBar";
import {StyleSheet, } from 'react-native'

import React, { useContext, useState,  } from 'react';
import CardapioScreen from "../Cardapio/ListarCardapio";
import { IHomeScreenProps } from "./types";
import { data } from "../../../__mocks__/data";
import theme, { colors } from "../../../themes/Theme";
import { useColorMode } from "../../../themes/ThemeContext";
import { ThemeContext, ThemeProvider } from "../../../themes/ThemeContext";
import { Dimensions } from "react-native";

const HomeScreen = (props: IHomeScreenProps) => {

    //===================================================== State's ==========================================================
    const [colorMode] = useColorMode();

    const caroselitem = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Aafreen Khan",
        timeStamp: "12:47 PM",
        recentText: "Good Day!",
        avatarUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-ads-design-template-e76fb5449011d0fc853aceeda7e364ab_screen.jpg?ts=1632040692"
      }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Sujitha Mathur",
        timeStamp: "11:11 PM",
        recentText: "Cheer up, there!",
        avatarUrl: "https://i.pinimg.com/736x/5d/c2/a5/5dc2a501df5caea150d03c1567840ee0.jpg"
      },
    ]
const {width} = Dimensions.get('window')

    return (
        
        <ThemeProvider>
            <StatusBar />
            <ScrollView>
            <AppBar pageTitle={"Home"} />




            <Box >
                
                <Box  backgroundColor={colors.light.brancoPuro} marginBottom={5}>
                <Heading  marginTop={5} fontSize="lg"  paddingX={4}>Ultimas Cantinas</Heading>
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
                   






                    

                    <FlatList marginBottom={6}
                 showsHorizontalScrollIndicator={true} 
                    horizontal
                    data={caroselitem}
                    renderItem={({ item }) => <Box style={{ 
                        height: width / 2.6 , width,
                    }}

                    >
                        
                            <Image h={120} w='100%' source={{ uri: item.avatarUrl }} alt="teste" />
                            
                           
                        
                    </Box>} />
                    
                    
                    
                   



                <Box padding={3} backgroundColor={colors.light.background}>
                    <Heading fontSize="lg" paddingX={4}>Cantinas</Heading>
                    <FlatList
                    

                        data={data}
                        renderItem={({ item }) => <Box
                            _dark={{ borderColor: "muted.50" }}
                            borderColor="muted.800"

                            py="2">
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
                                        color="coolGray.800">
                                        {item.nomerestaurante}
                                    </Text>

                                    <Text
                                        marginLeft={3}

                                        fontSize="md"
                                    >
                                        jhjy
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: 'white'
    }
})