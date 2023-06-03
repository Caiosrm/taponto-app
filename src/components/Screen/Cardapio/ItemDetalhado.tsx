import { Avatar, Box, Button, ScrollView } from "native-base";
import AppBar from "../../Common/TopBar";
import { Text } from 'native-base'
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../themes/Theme";
import { people } from "../../../__mocks__/data";
import TopBar from "../../Common/TopBar";



const ItemDetalhado = () => {

    return (
        <>

            <Box flex={1}>
                <TopBar />
                <Box marginBottom={200} flex={2} padding={2}>
                    <ScrollView  >

                        <FlatList
                            data={people}
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

        </>

    );
}

export default ItemDetalhado;