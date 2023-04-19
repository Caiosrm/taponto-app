import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar, Box, HStack, IconButton, Icon, Text } from "native-base";
import { useState } from "react";


interface Props {
    title: string
}


export default function AppBar(props: Props) {


    const [colorMode, setColorMode] = useState('light');





    return (
        <>
            <StatusBar backgroundColor={colorMode === "light" ? "white" : "black"}
                barStyle={colorMode === "light" ? "dark-content" : "light-content"} />

            <HStack bg="red.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
                <HStack alignItems="center">
                   
                    <Text color="white" fontSize="20" fontWeight="bold">
                        {props.title}
                    </Text>
                </HStack>
                <HStack>


                    <IconButton icon={<Icon as={MaterialIcons} name="shopping-cart" size="sm" color="white" />} />

                    <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />


                </HStack>
            </HStack>
        </>
    );
}

