import React from 'react';
import { View, Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './splash';
import Main from './mian';

import CheckOut from './drawer/checkOut';
import CheckDetails from './drawer/checkDetails';
import MyDrawer from './drawer/drawerNavigation';


const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    
    return (
    
            <Stack.Navigator>
                <Stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="checkout" component={CheckOut} options={{ headerShown: false }} />
                <Stack.Screen name="checkdetails" component={CheckDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
        
    )
};

export default StackNavigator;