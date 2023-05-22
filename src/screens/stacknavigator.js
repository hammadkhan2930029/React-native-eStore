import React from 'react';
import {View , Text} from "react-native";
import { NavigationContainer,useNavigationContainerRef, } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './splash';
import Main from './mian';
import Home from './drawer/home';
import Blogs from './drawer/blogs';
import LoadMore from './drawer/blogsLoadMore';
import Apparel from './drawer/apparel';
import ApparelGrid from './drawer/apparelGrid';
import ProductDetails from './drawer/productDetail';
import ProductDetailsLayout from './drawer/productDetailsLayout';
import ApparelFullView from './drawer/apparelFullView';
import CollectionBlack from './drawer/collectionBlack';
import CollectionDetails from './drawer/collectionDetails';
import CheckOut from './drawer/checkOut';
import PlaceOrder from './drawer/placeOrder';
import AddShippingAdress from './drawer/addShippingAdress';
import PaymentMethod from './drawer/paymentMethod';
import Contact from './drawer/contactUs';
import About from './drawer/about';
import MyDrawer from './drawer/drawerNavigation';








const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    const navigationRef = useNavigationContainerRef()
    return(
        // <NavigationContainer ref={navigationRef} >
            <Stack.Navigator>
                <Stack.Screen name="splash"  component={SplashScreen} options={{headerShown: false}}/>
                <Stack.Screen name="home"  component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="main"  component={Main} options={{headerShown: false}}/>
                <Stack.Screen name="blogs"  component={Blogs} options={{headerShown: false}}/>
                <Stack.Screen name="loadmore"  component={LoadMore} options={{headerShown: false}}/>
                <Stack.Screen name="apparel"  component={Apparel} options={{headerShown: false}}/>
                <Stack.Screen name="apparelGrid"  component={ApparelGrid} options={{headerShown: false}}/>
                <Stack.Screen name="productDetails"  component={ProductDetails} options={{headerShown: false}}/>
                <Stack.Screen name="productDetailsLayout"  component={ProductDetailsLayout} options={{headerShown: false}}/>
                <Stack.Screen name="apparelFullView"  component={ApparelFullView} options={{headerShown: false}}/>
                <Stack.Screen name="collectionBlack"  component={CollectionBlack} options={{headerShown: false}}/>
                <Stack.Screen name="collectionDetails"  component={CollectionDetails} options={{headerShown: false}}/>
                <Stack.Screen name="checkOut"  component={CheckOut} options={{headerShown: false}}/>
                <Stack.Screen name="placeOrder"  component={PlaceOrder} options={{headerShown: false}}/>
                <Stack.Screen name="addShippingAdress"  component={AddShippingAdress} options={{headerShown: false}}/>
                <Stack.Screen name="paymentmethod"  component={PaymentMethod} options={{headerShown: false}}/>
                <Stack.Screen name="contact"  component={Contact} options={{headerShown: false}}/>
                <Stack.Screen name="about"  component={About} options={{headerShown: false}}/>
                <Stack.Screen name="myDrawer"  component={MyDrawer} options={{headerShown: false}}/>



            </Stack.Navigator>
        // </NavigationContainer>
    )
};

export default StackNavigator;