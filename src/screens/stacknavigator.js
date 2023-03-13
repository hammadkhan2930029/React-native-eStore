import React from 'react';
import {View , Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './splash';
import Main from './mian';


const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="splash"  component={SplashScreen} options={{headerShown: false}} />
                <Stack.Screen name="main"  component={Main} options={{headerShown: false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default StackNavigator;