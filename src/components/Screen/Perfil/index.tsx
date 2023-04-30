import { View, Text } from "native-base";
import React from "react";
import { IPerfilScreenProps } from "./types";
import AppBar from "../../Common/AppBar";

const PerfilScreen = (props: IPerfilScreenProps) => {

    //===================================================== State's ===========================================================


    //===================================================== useEffect's =======================================================


    //===================================================== HandleChange's ====================================================


    return (
        <View>
            <AppBar pageTitle={props.pageTitle} />

            <Text> teste </Text>
        </View>

    );
};

export default PerfilScreen;
;