import { Avatar, Box, Button, Input, ScrollView } from "native-base";
import { ICardapioProps } from "./types"
import AppBar from "../../Common/AppBar";
import { Text } from 'native-base'
import { Modalize } from "react-native-modalize";
import { useRef } from "react";
import { Dimensions, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { colors } from "../../../themes/Theme";

const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
},
{
    id: "bd7acbea-c1b1-46c2-aed5-3adgfd53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}, {
    id: "3ac68afc-c605-48d3-a4gfdf8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
},


]

const ItemDetalhado = () => {

    return (
        <>

            <Box flex={1}>
                <AppBar />
                <Box marginBottom={200} flex={2} padding={2}>
                    <ScrollView  >

                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
                                <Box
                                    backgroundColor={colors.light.brancoPuro}
                                    alignItems='center'
                                    flexDirection='row'
                                    borderRadius={5}
                                    marginBottom={3}
                                    padding={5}
                                    shadow={2}
                                    h={120}

                                    py="2"
                                >
                                    <Box>
                                        <Avatar />
                                    </Box>
                                    <Box marginLeft={3} flexDirection='column' flex={1}>

                                        <Text>fgbhd</Text>
                                        <Text maxH={10}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus ut alias temporibus aut? Hic dolor eligendi ipsa, voluptates sit ipsam suscipit, velit accusantium reprehenderit,</Text>


                                    </Box>
                                    <Box alignContent='center' shadow={2} borderRadius={5} bg={colors.light.brancoPuro} alignItems='center' >
                                        <Box alignItems='center' flexDirection='row'>
                                            <Button

                                                variant="ghost"
                                                colorScheme="success"
                                            >
                                                +
                                            </Button>

                                            <Text color='black'>1</Text>

                                            <Button
                                                variant="ghost"
                                                colorScheme="red"
                                            >
                                                -
                                            </Button>

                                        </Box>
                                        <Box marginBottom={2} justifyContent='space-between' alignItems='center' flexDirection='row'>
                                            <Ionicons marginRight={10} name='md-trash-bin-outline' size={20} color='black' />
                                            <Ionicons name='md-create-outline' size={22} color='black' />

                                        </Box>
                                    </Box>

                                </Box>

                            )}
                            keyExtractor={item => item.id}
                        />
                    </ScrollView>

                </Box>

            </Box>
            <Box
                position='absolute'
                bottom={20}
                left={0}
                right={0}


                shadow={2}

                bg={colors.light.brancoPuro}
                padding={5}
            >
                <Box marginBottom={5} justifyContent='space-between' flexDirection='row'>
                    <Text>Total</Text>
                    <Text>R$ 40,00</Text>
                </Box>
                <Button>Fechar pedido</Button>
            </Box>
        </>

    );
}

export default ItemDetalhado;