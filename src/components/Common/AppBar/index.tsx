import { MaterialIcons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar, Box, HStack, IconButton, Icon, Text } from "native-base";
import { useState } from "react";
import { AppBarProps } from "./types";
import React from "react";
import { useColorMode } from "./states";
import { colors } from "../../../themes/Theme";

export default function AppBar(props: AppBarProps) {

	const [colorMode, toggleColorMode] = useColorMode();

	function handleToggleTheme() {
		if (colorMode === "light") {
			toggleColorMode("dark");
		} else {
			toggleColorMode("light");
		}
	}

	return (
		<>
			<StatusBar
				backgroundColor={
					colorMode === "light"
						? colors.light.background
						: colors.dark.background
				}
				barStyle={
					colorMode === "light" ? "dark-content" : "light-content"
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
					<Text
						color={
							colorMode === "light"
								? colors.light.brancoPuro
								: colors.dark.pretoPuro
						}
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
							<Icon
								as={MaterialIcons}
								name="search"
								size="sm"
								color={
									colorMode === "light"
										? colors.light.brancoPuro
										: colors.dark.pretoPuro
								}
							/>
						}
					/>
				</HStack>
			</HStack>
		</>
	);
}

