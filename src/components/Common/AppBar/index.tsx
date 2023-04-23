import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { StatusBar, Box, HStack, IconButton, Icon, Text } from "native-base";
import { useState } from "react";
import { AppBarProps } from "./types";
import React from "react";
import { useColorMode } from "./states";

export default function AppBar(props: AppBarProps) {
	return (
		<>
			<StatusBar backgroundColor={useColorMode()[0] === "light" ? "white" : "black"} barStyle={useColorMode()[0] === "light" ? "dark-content" : "light-content"} />
			<HStack bg="red.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
				<HStack alignItems="center">
					<Text color="white" fontSize="20" fontWeight="bold">{props.pageTitle}</Text>
				</HStack>
				<HStack>
					<IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
				</HStack>
			</HStack>
		</>
	);
}