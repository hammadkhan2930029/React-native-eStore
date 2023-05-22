import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const PlaceOrder = () => {


    const navigation = useNavigation();


    const [isClick, setIsClick] = useState(false)


    return (
        // ---------------Top Navbar-----------------
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
            <View style={style.TopNavbar}>
                <TouchableOpacity>
                    <View style={style.drawerBtnView} onPress={() => {navigation.openDrawer()}}>
                        <Image source={require('../../NewAssets/Menu.png')} />
                    </View>
                </TouchableOpacity>

                <View style={style.Logo}>
                    <Image style={style.logoImage} source={require('../../NewAssets/logo.png')} />
                </View>

                <View style={style.SearchAndCard}>
                    <TouchableOpacity>
                        <View style={style.searchIcon}>
                            <Image source={require('../../NewAssets/Search.png')} />

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={style.cartIcon}>
                            <Image source={require('../../NewAssets/shoppingBag.png')} />

                        </View>
                    </TouchableOpacity>

                </View>

            </View>
            <ScrollView>
                <View>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(4), letterSpacing: 4, textAlign: 'center' }}>CHECKOUT</Text>
                    <Image style={{ alignSelf: 'center' }} source={require('../../NewAssets/line.png')} />
                </View>
                {/* ------------Place Order------------- */}
                <View style={{ width: width - 20, height: height, alignSelf: 'center', marginTop: 20 }}>
                    {/* -------Shipping Adress-------------- */}
                    <Text style={{ color: '#888888', fontSize: responsiveFontSize(3) }}>SHIPPING ADRESS</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ padding: 15, width: responsiveWidth(80) }}>
                            <Text style={{ color: 'black', fontSize: responsiveFontSize(3), lineHeight: 25 }}>Iris Watson</Text>
                            <Text style={{ color: '#888888', fontSize: responsiveFontSize(2), lineHeight: 25 }}>SHIPPING ADRESS</Text>
                            <Text style={{ color: '#888888', fontSize: responsiveFontSize(2), lineHeight: 25 }}>SHIPPING ADRESS</Text>
                            <Text style={{ color: '#888888', fontSize: responsiveFontSize(2), lineHeight: 25 }}>SHIPPING ADRESS</Text>

                        </View>
                        <TouchableOpacity>
                            <View>
                                <Image source={require('../../NewAssets/apperal/Forward.png')} />
                            </View>
                        </TouchableOpacity>

                    </View>
                    {/* ------------Add Shipping Adress---------------- */}
                    <TouchableOpacity onPress={() => navigation.navigate('addShippingAdress')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: width - 30, backgroundColor: '#F2F3F4', alignSelf: 'center', padding: 8, borderRadius: 20 }}>
                            <Text style={{ color: '#888888', fontSize: responsiveFontSize(2), lineHeight: 25 }}>Add Shipping Adress</Text>
                            <Image source={require('../../NewAssets/apperal/Plus.png')} />
                        </View>
                    </TouchableOpacity>
                    {/* ------------------Shipping Method----------- */}
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#888888', fontSize: responsiveFontSize(3) }}>SHIPPING METHOD</Text>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - 30, alignSelf: 'center', padding: 15 }}>
                                <View>
                                    <Text style={{ color: '#888888', fontSize: responsiveFontSize(2), lineHeight: 25 }}>Pickup at Store</Text>

                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '30%' }}>
                                    <Text style={{ color: '#888888', fontSize: responsiveFontSize(2) }}>FREE</Text>
                                    <Image source={require('../../NewAssets/apperal/ForwardDown.png')} />
                                </View>


                            </View>
                        </TouchableOpacity>


                    </View>
                    {/* ----------Payment Maythod--------- */}
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#888888', fontSize: responsiveFontSize(3) }}>PAYMENT METHOD</Text>
                        <TouchableOpacity>
                            <View style={{ width: width - 30, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', padding: 15 }}>
                                <Text style={{ color: '#888888', fontSize: responsiveFontSize(2) }}>Select payment Maythod</Text>

                                <Image source={require('../../NewAssets/apperal/ForwardDown.png')} />

                            </View>
                        </TouchableOpacity>

                    </View>

                </View>

            </ScrollView>
            <TouchableOpacity>
                <View style={{ width: width, backgroundColor: 'black', padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <Image source={require('../../NewAssets/apperal/bag2.png')} />
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontSize: responsiveFontSize(2.5), paddingLeft: 10, letterSpacing: 4 }}>PLACE ORDER</Text>
                    </View>
                </View>
            </TouchableOpacity>



        </SafeAreaView>
    )
};
const { width, height } = Dimensions.get("screen")
const style = StyleSheet.create({
    // ------------Top navbar-----------
    TopNavbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        padding: 15,
        width: width

    },
    SearchAndCard: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'flex-end',
        // width: '18%',
        // backgroundColor: 'blue',



    },
    searchIcon: {
        // paddingRight:5


    },
    cartIcon: {
        marginLeft: 5

    },

    logoImage: {
        resizeMode: 'contain',
        width: 80,

    },

});

export default PlaceOrder;