import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DrawerNavigator from "./drawer/drawerNavigator";

const Main = () => {
    return (
        <View style={{ flex: 1 }}>

            <DrawerNavigator />
        </View>
    )
};



export default Main;