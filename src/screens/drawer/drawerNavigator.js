import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Home from "./home";
import CustomDrawer from "./customDrawer";

const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props=> <CustomDrawer {...props}/>}>
            <Drawer.Screen name="home" component={Home} options={{headerShown: false}}/>
        </Drawer.Navigator>
    )
};



export default DrawerNavigator;