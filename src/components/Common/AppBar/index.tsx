import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Text, View, HStack, Icon, IconButton } from "native-base";
import { AppBarProps } from "./types";
import React from "react";
import { colors } from "../../../themes/Theme";
import { useTheme } from "../../../themes/ThemeContext";
import { StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import HomeScreen from "../../Screen/Home";
import { initialStateHome } from "../../Screen/Home/types";
import { RootStackParamList } from "../../../routes/types";


export default function AppBar(props: AppBarProps) {

	const { colorMode, toggleColorMode } = useTheme();

    const navigation = useNavigation<RootStackParamList>();



	return (
		<View>
			<StatusBar
				backgroundColor={colorMode === "light" ? colors.light.background : colors.dark.background}
				barStyle={colorMode === "light" ? "dark-content" : "light-content"} />
			<HStack
				bg={colorMode === "light" ? colors.light.azulTurquesa : colors.dark.azulPetroleo}
				px="1"
				py="3"
				justifyContent="space-between"
				alignItems="center"
				w="100%"
			>
				<HStack alignItems="center">
					<IconButton
						onPress={() => navigation.navigate('Home')}
						icon={<Icon as={Ionicons}
							name="home-outline"
							size="sm"
							color={colorMode === "light" ? colors.light.brancoPuro : colors.dark.pretoPuro} />} />
					<Text
						color={colorMode === "light" ? colors.light.brancoPuro : colors.dark.pretoPuro}
						fontSize="20"
						fontWeight="bold"
					>{props.pageTitle}
					</Text>
				</HStack>

				<HStack>
					<IconButton
						icon={<Icon as={MaterialCommunityIcons}
							name="theme-light-dark"
							size="sm"
							color={colorMode === "light" ? colors.light.brancoPuro : colors.dark.pretoPuro}
							onPress={toggleColorMode} />} />
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
