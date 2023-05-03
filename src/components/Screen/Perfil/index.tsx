import { View, Text } from "native-base";
import React, { useEffect } from "react";
import { IPerfilScreenProps } from "./types";
import AppBar from "../../Common/AppBar";
import { lerJSONEnviarFirebase } from "../../../api/requests/postProduto";

const PerfilScreen = (props: IPerfilScreenProps) => {

    //===================================================== State's ===========================================================


    //===================================================== useEffect's =======================================================


    //===================================================== HandleChange's ====================================================
    useEffect(() => {
    }, [])

    return (
        <View>
            <AppBar pageTitle={props.pageTitle} />

            <Text> teste </Text>
        </View>

    );
};

export default PerfilScreen;
;