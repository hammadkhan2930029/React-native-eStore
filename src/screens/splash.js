import React, { useEffect } from "react";
import { View, Text, StyleSheet,Image } from "react-native";


const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("home")
        }, 1000)
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#E9E9E9'  }}>

            <Image source={require('../assets/logo.png')}/>
        </View>
    )
};



export default SplashScreen;