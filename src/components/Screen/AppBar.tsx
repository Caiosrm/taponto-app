import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar, Box, HStack, IconButton, Icon, Text } from "native-base";
import { useState } from "react";


export default function AppBar() {

    const [colorMode, setColorMode] = useState('light');


    const backgroundColor = colorMode === 'light' ? 'white' : 'black';


    return (
        <>
            <StatusBar backgroundColor={colorMode === "light" ? "white" : "black"}
                barStyle={colorMode === "light" ? "dark-content" : "light-content"} />
            <Box safeAreaTop bg="violet.600" />
            <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
                <HStack alignItems="center">
                    <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
                    <Text color="white" fontSize="20" fontWeight="bold">
                        Home
                    </Text>
                </HStack>
                <HStack>
                    <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
                    <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
                    <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
                </HStack>
            </HStack>
        </>
    );
}

