import { View, Text, Button, useTheme, Container, Card } from "native-base";
import AppBar from "../AppBar";
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const HomeScreen = () => {
    const { colors } = useTheme();



    return (
        <View>
            <AppBar />
        </View>

    );
};

export default HomeScreen;



