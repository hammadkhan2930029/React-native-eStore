import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const CheckOut = () => {


    const navigation = useNavigation();


    const [isClick, setIsClick] = useState(false)
    const [value, setValue] = useState(1)
    const inc = () => {
        setValue(value + 1)
    }
    const dec = () => {
        setValue(value - 1)

    }
    let price = 251;

    return (
        // ---------------Top Navbar-----------------
        <SafeAreaView style={{ backgroundColor: 'white', height: responsiveHeight(100) }}>
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
                    <Text style={{ color: 'black', fontSize: 24, letterSpacing: 4, textAlign: 'center' }}>CHECKOUT</Text>
                    <Image style={{ alignSelf: 'center' }} source={require('../../NewAssets/line.png')} />
                </View>
                {/* ------------CheckOut cards------------- */}
                <View style={{ width: width - 20, height: height, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#555555', borderBottomWidth: .5 }}>
                        <View>
                            <Image style={{ resizeMode: 'contain', width: width - 240, margin: 5 }} source={require('../../NewAssets/apperal/image1.png')} />
                        </View>
                        <View style={{ height: 150, padding: 10 }}>
                            <Text style={{ color: 'black', fontSize: 22, paddingBottom: 20 }}>LAMER</Text>
                            <Text style={{ color: '#555555', fontSize: 16 }}>Lamer by the fashion</Text>
                            <View style={{ width: '60%', paddingTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={() => dec()}>
                                    <Image source={require('../../NewAssets/blackTheem/min.png')} />
                                </TouchableOpacity>
                                <Text style={{ color: 'black', fontSize: 20 }}>{value}</Text>
                                <TouchableOpacity onPress={() => inc()}>
                                    <Image source={require('../../NewAssets/blackTheem/Plus.png')} />
                                </TouchableOpacity>


                            </View>
                            <Text style={{ color: '#DD8560', fontSize: 22, fontWeight: 'bold', paddingTop: 5 }}>$ {price}</Text>

                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomColor: '#555555', borderBottomWidth: .5 }}>
                            <Image source={require('../../NewAssets/apperal/vector.png')} />
                            <Text style={{ color: '#555555', fontSize: 18, paddingLeft: 10 }}>Add Promo Code</Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomColor: '#555555', borderBottomWidth: .5 }}>
                            <Image source={require('../../NewAssets/apperal/vector2.png')} />
                            <Text style={{ color: '#555555', fontSize: 18, paddingLeft: 10 }}>Delivery</Text>

                        </View>
                    </TouchableOpacity>


                </View>

            </ScrollView>
            <View style={{ width: responsiveWidth(100), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                <Text style={{ color: 'black', fontSize: 18 }}>EST . Total</Text>
                <Text style={{ color: '#DD8560', fontSize: 18, fontWeight: '900' }}>
                    ${price * value}
                </Text>
            </View>
            <TouchableOpacity onPress={() => { setIsClick(!isClick) }}>
                <View style={{ width: responsiveWidth(100), backgroundColor: 'black', padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <Image source={require('../../NewAssets/apperal/bag2.png')} />
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontSize: 20, paddingLeft: 10, letterSpacing: 3 }}>CHECKOUT</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/* -------------Modal ------------------ */}
            <View style={{ position: 'absolute', alignSelf: 'center', marginTop: "30%" }}>
                {isClick ? <View style={{ width: responsiveWidth(90), height: responsiveHeight(55), backgroundColor: 'white', borderRadius: 15, borderColor: '#F2F3F4', borderWidth: 2 }}>
                    <View>
                        <Text style={{ color: 'black', fontSize: responsiveFontSize(3), paddingLeft: 10, letterSpacing: 3, textAlign: 'center', padding: 15 }}>PAYMENT SUCCESS</Text>
                    </View>
                    <View style={{ alignSelf: 'center', padding: 10 }}>
                        <Image source={require('../../NewAssets/apperal/vector1.png')} />
                    </View>
                    <View style={{ padding: 15 }}>
                        <Text style={{ color: 'gray', fontSize: responsiveFontSize(2.5), textAlign: 'center', padding: 5 }}>Your Payment Was Success</Text>
                        <Text style={{ color: 'gray', fontSize: responsiveFontSize(2), textAlign: 'center', padding: 5 }}>Payment ID 00112233</Text>

                    </View>
                    <View style={{ alignSelf: 'center', padding: 10 }}>
                        <Image source={require('../../NewAssets/line.png')} />
                    </View>
                    <Text style={{ color: 'gray', fontSize: responsiveFontSize(2.5), textAlign: 'center' }}>Rate your Purchase</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 15 }}>
                        <Image source={require('../../NewAssets/apperal/sad.png')} />
                        <Image source={require('../../NewAssets/apperal/Love.png')} />
                        <Image source={require('../../NewAssets/apperal/happy.png')} />


                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: 'black', width: responsiveWidth(30), padding: 10, borderRadius: 10 }}>
                                <Text style={{ color: 'white', fontSize: responsiveFontSize(2), textAlign: 'center' }}>SUBMIT</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: responsiveWidth(40), padding: 10, borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}>
                                <Text style={{ color: 'black', fontSize: responsiveFontSize(2), textAlign: 'center' }}>BACk TO HOME</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View> : null}

            </View>


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
        width: responsiveWidth(100)

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

export default CheckOut;