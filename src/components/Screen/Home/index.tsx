import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../../Routes/types";
import { View, Text } from "native-base";

type RouteProps = { //Props de Navegação entre Telas
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
    route: RouteProp<RootStackParamList, 'Home'>;
};

interface HomeProps extends StackScreenProps<RootStackParamList, 'Home'> { }

const HomeScreen = ({ navigation, route }: RouteProps) => {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>

    )
};

export default HomeScreen;