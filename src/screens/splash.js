import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("home")
        }, 1000)
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2' }}>
            <Image style={{ width: "60%" ,resizeMode:'contain' }} source={require('../NewAssets/logo.png')} />
        </View>
    )
};

export default SplashScreen;