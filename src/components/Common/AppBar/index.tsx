import { MaterialIcons, AntDesign, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { StatusBar, Box, HStack, IconButton, Icon, Text, ColorMode, Avatar, Heading, Input } from "native-base";
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
			<Box alignItems='center' marginBottom={5} flexDirection={'row'}>
				<Ionicons name='location' size={24} color='red' />
				<Text marginX={1}>Av. brasilia 279</Text>
				<Ionicons name='caret-down' size={15} color='red' />
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
			<HStack
				bg={colors.light.azulTurquesa}
				px="1"
				py="3"
				justifyContent="space-between"
				alignItems="center"
				w="100%"
			>
				<HStack alignItems="center">
					<IconButton
						icon={<Icon as={Ionicons}
							name="home-outline"
							size="sm"
							color={colorMode === "light" ? colors.light.brancoPuro : colors.dark.pretoPuro}
						/>
						}
					/>
					<Text
						color={colorMode === "light" ? colors.light.brancoPuro : colors.dark.pretoPuro}
						fontSize="20"
						fontWeight="bold"
					>
						{props.pageTitle}
					</Text>
				</HStack>

				<HStack>
					<IconButton
						icon={
							<Icon
								as={MaterialCommunityIcons}
								name="theme-light-dark"
								size="sm"
								color={
									colorMode === "light"
										? colors.light.brancoPuro
										: colors.dark.pretoPuro
								}
								onPress={handleToggleTheme}
							/>
						}
					/>

					<IconButton
						icon={
							<Icon as={MaterialIcons}
								name="search"
								size="sm"
								color={colorMode === "light" ? colors.light.brancoPuro : colors.dark.pretoPuro}
							/>
						}
					/>

				</HStack>
			</HStack>
		</Box>
	);
}


