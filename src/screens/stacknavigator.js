import React from 'react';
import { View, Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './splash';
import Main from './mian';
import AddShippingAdress from './drawer/addShippingAdress';
import PaymentMethod from './drawer/paymentMethod';
import PlaceOrder from './drawer/placeOrder';
import CheckOut from './drawer/checkOut';


const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    
    return (
    
            <Stack.Navigator>
                <Stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="addshippingaddress" component={AddShippingAdress} options={{ headerShown: false }} />
                <Stack.Screen name="paymentMethod" component={PaymentMethod} options={{ headerShown: false }} />
                <Stack.Screen name="placeOrder" component={PlaceOrder} options={{ headerShown: false }} />
                <Stack.Screen name="checkout" component={CheckOut} options={{ headerShown: false }} />
            </Stack.Navigator>
        
    )
};

export default StackNavigator;