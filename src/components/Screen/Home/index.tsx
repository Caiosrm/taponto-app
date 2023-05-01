import { Avatar, Box, Heading, Text, FlatList, StatusBar, ScrollView, Input, Badge } from "native-base";
import AppBar from "../../Common/AppBar";
import { TouchableOpacity, } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import React, { useRef, } from 'react';
import { IHomeScreenProps } from "./types";
import { data } from "../../../__mocks__/data";
import { colors } from "../../../themes/Theme";
import { ThemeProvider, useTheme } from "../../../themes/ThemeContext";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";

const caroselitem = [
    '#e78eea',
    '#7cdacb',
    '#6f31fe',
    '#784e8a',
    '#ef1541',
    '#b37784',
]

const Polos = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        nomepolo: "Polo Via Corpvs",
        nomerua: 'Rua Eliseu Uchôa Becco ',
        numerorua: '600'

    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        nomepolo: "Polo Papicu",
        nomerua: 'Rua Professor Sila Ribeiro',
        numerorua: '209'

    }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        nomepolo: "Polo Centro",
        nomerua: 'Rua Artur Ramos',
        numerorua: '243'
    }

];

const HomeScreen = (props: IHomeScreenProps) => {

    const onOpen = () => { modalizeRef.current?.open() };

    const { colorMode, toggleColorMode } = useTheme();

    //===================================================== State's ==========================================================

    const modalizeRef = useRef<Modalize>(null);

    const { width } = Dimensions.get('window')

    return (

        <ThemeProvider>

            <StatusBar />

            <GestureHandlerRootView style={{ flex: 1 }}>
                <AppBar pageTitle={props.pageTitle} />
                <Box bg={colors.light.azulTurquesa} padding={5}>
                    <Box marginBottom={6} flexDirection='row' justifyContent='space-between'>
                        <Box>
                            <Heading color={colorMode === 'light' ? colors.light.brancoPuro : colors.light.pretoPuro}>
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
                    <Input placeholder="Prato ou cantina"
                        fontSize={16}
                        bg='#e6e6e6'
                        borderWidth={0}
                        borderRadius={10}
                        padding={2}
                        InputLeftElement={
                            <Box marginLeft={2}>
                                <Ionicons name='search' size={24} color='red' />
                            </Box>}
                        InputRightElement={
                            <Box marginRight={2}>
                                <Ionicons name="filter" size={24} color="red" />
                            </Box>} />
                </Box>

                <Box bg={colors.light.azulTurquesa}>
                    <TouchableOpacity onPress={onOpen}>
                        <Box marginLeft={5} alignItems='center' marginBottom={5} flexDirection={'row'}>
                            <Ionicons name='location' size={24} color='red' />
                            <Text color={colors.light.brancoPuro} marginX={1}>
                                Polo Via Corpvs
                            </Text>
                            <Ionicons name='caret-down' size={15} color='red' />
                        </Box>
                    </TouchableOpacity>
                </Box>

                <Modalize
                    overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    ref={modalizeRef}
                    snapPoint={600}
                >
                    <Box
                        backgroundColor={colors.light.background}
                        h={600}
                    >
                        <Input placeholder="Localize a sua unidade"
                            fontSize={16}
                            bg='#e6e6e6'
                            borderWidth={0}
                            borderRadius={10}
                            padding={2}
                            marginBottom={5}
                            InputLeftElement={
                                <Box marginLeft={2}>
                                    <Ionicons name='search' size={24} color='red' />
                                </Box>
                            }
                        />
                        <Box>
                            <FlatList
                                data={Polos}
                                renderItem={({ item }) => (
                                    <Box
                                        backgroundColor={colors.light.brancoPuro}
                                        alignItems='center'
                                        flexDirection='row'
                                        borderRadius={5}
                                        marginBottom={3}
                                        shadow={2}
                                        h={20}
                                        py="2"
                                    >
                                        <Box>
                                            <Ionicons name='ios-location-outline' size={24} color='black' />
                                        </Box>
                                        <Box marginLeft={3} flexDirection='column' flex={1}>
                                            <Text>{item.nomepolo}</Text>
                                            <Text>{item.nomerua}</Text>
                                        </Box>
                                        <Box alignItems='flex-end'>
                                            <Ionicons name='ellipsis-vertical-sharp' size={24} color='black' />
                                        </Box>
                                    </Box>
                                )}
                                keyExtractor={item => item.id}
                            />
                        </Box>
                    </Box>
                </Modalize>

                <ScrollView marginBottom={12}>
                    <Box backgroundColor={colors.light.brancoPuro} marginBottom={5}>
                        <Heading marginTop={5} fontSize="sm" paddingX={4}>
                            Cantinas abertas agora
                        </Heading>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => String(item)}
                            pagingEnabled
                            horizontal
                            data={data}
                            renderItem={({ item }) =>
                                <Box padding={5}>
                                    <Box flexDirection='column' alignItems='center' >
                                        <Avatar
                                            source={{ uri: item.avatarUrl }}
                                            height={16}
                                            width={16}
                                            size="48px"
                                        />
                                        <Text
                                            textAlign='center'
                                            fontSize="xs"
                                            color="black"
                                        >
                                            {item.nomerestaurante}
                                        </Text>
                                    </Box>
                                </Box>
                            }
                        />
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

                    <Box
                        justifyContent='space-between'
                        padding={3}
                        backgroundColor={colors.light.background}
                        flex={1}
                    >
                        <Heading marginBottom={5} fontSize="lg">
                            Cantinas
                        </Heading>

                        <Box>
                            <FlatList data={data} renderItem={({ item }) => (
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
                                            <Badge colorScheme="success" size={"sm"} alignSelf="center" variant={"outline"}>
                                                ABERTO
                                            </Badge>
                                        </Text>
                                        <Box alignItems='center' flexDirection='row' >
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
                    </Box>
                </ScrollView>
            </GestureHandlerRootView>
        </ThemeProvider >

    );
};

export default HomeScreen;

