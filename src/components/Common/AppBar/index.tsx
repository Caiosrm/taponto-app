import { Ionicons } from "@expo/vector-icons";
import { Box, Text, Avatar, Input, Heading, View } from "native-base";
import { useRef, useState } from "react";
import { AppBarProps } from "./types";
import React from "react";
import { colors } from "../../../themes/Theme";
import { useColorMode } from "../../../themes/ThemeContext";
import { Header } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";

export default function AppBar(props: AppBarProps) {

	const [colorMode, toggleColorMode] = useColorMode();

	const modalizeRef = useRef<Modalize>(null);

	const onOpen = () => {
		modalizeRef.current?.open();
	};


	function handleToggleTheme() {
		if (colorMode === "light") {
			toggleColorMode("dark");
			console.log(colorMode)

		} else {
			toggleColorMode("light");
			console.log(colorMode)
		}
	}

	return (
		<>




			<Box padding={5}>
				<Box marginBottom={6} flexDirection='row' justifyContent='space-between'>
					<Box>

						<Heading color='black' >Olá, Alisson.</Heading>
						<Text>O que você quer pedir agora?</Text>
					</Box>
					<Box>
						<Avatar></Avatar>
					</Box>




				</Box>
				<Box alignItems='center' marginBottom={5} flexDirection={'row'}>
					<Ionicons name='location' size={24} color='red' />
					<Text marginX={1}>Av. brasilia 279</Text>
					<TouchableOpacity onPress={onOpen}>

						<Ionicons name='caret-down' size={15} color='red' />
					</TouchableOpacity>
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

				<Modalize


					ref={modalizeRef}
					snapPoint={600}
					


				>
					<View flex={1} h={180} flexDirection='row' justifyContent='center' alignItems='center'>
						<TouchableOpacity>
							<Text>hrjgkrngjk</Text>
							<Text>hrjgkrngjk</Text>
							<Text>hrjgkrngjk</Text>
							<Text>hrjgkrngjk</Text>
							<Text>hrjgkrngjk</Text>
							<Text>hrjgkrngjk</Text>
							<Text>hrjgkrngjk</Text>
							<Text>hrjgkrngjk</Text>
							<Text>hrjgkrngjk</Text>


						</TouchableOpacity>
					</View>
				</Modalize>


			</Box>

		</>


	);
}

