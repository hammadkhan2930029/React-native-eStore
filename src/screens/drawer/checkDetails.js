import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const CheckDetails = (props) => {
    console.warn(props.route.params);
const {username,userlastname,useraddress,usercity,userstate,usermobile,paymentMethod,price ,producttitle} = props.route.params
    const navigation = useNavigation();


    const [isClick, setIsClick] = useState(false)


    return (
        // ---------------Top Navbar-----------------
        <SafeAreaView style={{ height: responsiveHeight(100), width: responsiveWidth(100) }}>
            <View style={style.TopNavbar}>
                <TouchableOpacity>
                    <View style={style.drawerBtnView} onPress={() => { navigation.openDrawer() }}>
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
                <View style={{ padding: 10 }}>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5), textAlign: 'center' }}>SHIPPING ADRESS</Text>
                    <Image style={{ alignSelf: 'center' }} source={require('../../NewAssets/line.png')} />
                </View>
                <View style={{ width: responsiveWidth(95), alignSelf: 'center', backgroundColor: '#ffffff', borderRadius: 10, padding: 10 }}>

                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2.4) }}>Name : {username} {userlastname}</Text>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2.4) }}>Adress : {useraddress.substring(0, 20) + '..'}</Text>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2.4) }}>City : {usercity}</Text>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2.4) }}>State : {userstate}</Text>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2.4) }}>Mobile No : {usermobile}</Text>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2.4) }}>Payment Method : {paymentMethod}</Text>

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
             {/* -------------Modal ------------------ */}
            {/* <View style={{ position: 'absolute', alignSelf: 'center', marginTop: "30%" }}>
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
                        <TouchableOpacity onPress={() => navigation.navigate('home')}>
                            <View style={{ width: responsiveWidth(40), padding: 10, borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}>
                                <Text style={{ color: 'black', fontSize: responsiveFontSize(2), textAlign: 'center' }}>BACk TO HOME</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View> : null}

            </View>
 */}




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

    },
    cartIcon: {
        marginLeft: 5

    },

    logoImage: {
        resizeMode: 'contain',
        width: 80,

    },

});

export default CheckDetails;