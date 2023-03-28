import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomDrawer from "./customDrawer";
import Blogs from "./blogs";
import Home from "./home";


const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props=> <CustomDrawer {...props}/>}>
            <Drawer.Screen name="home" component={Home} options={{headerShown: false}}/>
            <Drawer.Screen name="blogs" component={Blogs} options={{headerShown: false}}/>


        </Drawer.Navigator>
    )
};



export default DrawerNavigator;