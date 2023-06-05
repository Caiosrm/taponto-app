import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { View, HStack, Icon, IconButton } from "native-base";
import { TopBarProps } from "./types";
import React from "react";
import { colors } from "../../../themes/Theme";
import { useTheme } from "../../../themes/ThemeContext";
import { StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../../../routes/types";


export default function TopBar(props: TopBarProps) {

	const { colorMode, toggleColorMode } = useTheme();

	const navigation = useNavigation<RootStackParamList>();

	const handleGoBack = () => {
		navigation.goBack();
	};

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
				{/* <HStack alignItems="center">
					<IconButton
						onPress={() => navigation.navigate('Home')}
						icon={<Icon as={FontAwesome}
							name="home"
							size="sm"
							color={colorMode === "light" ? colors.light.brancoPuro : colors.dark.pretoPuro} />}
					/>
				</HStack> */}
			</HStack>
		</View>
	);
}
