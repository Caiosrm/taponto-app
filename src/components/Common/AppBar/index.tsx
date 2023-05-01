import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Box, Text, Avatar, Input, Heading, View, HStack, Icon, IconButton, ScrollView } from "native-base";
import { AppBarProps } from "./types";
import React from "react";
import { colors } from "../../../themes/Theme";
import { useColorMode } from "../../../themes/ThemeContext";
import { Header } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar, TouchableOpacity } from "react-native";


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
		<View>
			<StatusBar
				backgroundColor={colorMode === "light" ? colors.light.background : colors.dark.background}
				barStyle={colorMode === "light" ? "dark-content" : "light-content"} />
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
							color={colorMode === "light" ? colors.light.brancoPuro : colors.dark.pretoPuro} />} />
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
						icon={<Icon as={MaterialCommunityIcons}
							name="theme-light-dark"
							size="sm"
							color={colorMode === "light" ? colors.light.brancoPuro : colors.dark.pretoPuro}
							onPress={handleToggleTheme} />} />
					<IconButton
						icon={<Icon
							as={MaterialIcons}
							name="search"
							size="sm"
							color={colorMode === "light" ? colors.light.brancoPuro : colors.dark.pretoPuro} />} />
				</HStack>
			</HStack>
			
		</View>
	);
}

