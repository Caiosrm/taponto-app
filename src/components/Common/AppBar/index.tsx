import { Ionicons } from "@expo/vector-icons";
import { Box, Text, Avatar, Input, Heading } from "native-base";
import { useState } from "react";
import { AppBarProps } from "./types";
import React from "react";
import { colors } from "../../../themes/Theme";
import { useColorMode } from "../../../themes/ThemeContext";
import { Header } from "@react-navigation/stack";

export default function AppBar(props: AppBarProps) {

	const [colorMode, toggleColorMode] = useColorMode();


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

	);
}

