import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";


const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("main")
        }, 2000)
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>

            <Text style={{color:'black'}}>Splash</Text>
        </View>
    )
};



export default SplashScreen;