import { View, Text } from "native-base";
import React, { useEffect } from "react";
import { IPerfilScreenProps } from "./types";
import TopBar from "../../Common/TopBar";

const PerfilScreen = (props: IPerfilScreenProps) => {

    //===================================================== State's ===========================================================


    //===================================================== useEffect's =======================================================


    //===================================================== HandleChange's ====================================================
    useEffect(() => {
    }, [])

    return (
        <View>
            <TopBar />

            <Text> teste </Text>
        </View>

    );
};

export default PerfilScreen;
;