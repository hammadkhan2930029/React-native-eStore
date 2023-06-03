import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image, ImageBackground, Dimensions, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


const AddShippingAdress = (props) => {


    const navigation = useNavigation();


    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [address, setaddress] = useState('')
    const [city, setCity] = useState('')
    const [stat, setStat] = useState('')
    const [mobNumber, setMobNumber] = useState('')

    const handle = () => {
    
        navigation.navigate('placeOrder', {
            username: firstName,
            userlastname: lastName,
            useraddress: address,
            usercity: city,
            userstate: stat,
            usermobile: mobNumber,
        })
    }





    return (
        // ---------------Top Navbar-----------------
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={style.TopNavbar}>
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                    <View style={style.drawerBtnView}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('placeOrder')}>
                        <View style={style.cartIcon}>
                            <Image source={require('../../NewAssets/shoppingBag.png')} />

                        </View>
                    </TouchableOpacity>

                </View>

            </View>

            <View>
                <Text style={{ color: 'black', fontSize: responsiveFontSize(2.8), textAlign: 'center', letterSpacing: 2 }}>ADD SHIPPING ADRESS</Text>
                <Image style={{ alignSelf: 'center' }} source={require('../../NewAssets/line.png')} />
            </View>
            {/* ----------------Add Shipping Adress Form--------------------- */}
            <View style={{ flexDirection: 'column', width: responsiveWidth(100), height: responsiveHeight(60), justifyContent: 'space-between' }}>


                <View style={{ width: responsiveWidth(95), alignSelf: 'center', marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            style={{ width: responsiveWidth(47.5), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                            placeholder="First Name"
                            placeholderTextColor="gray"
                            value={firstName}
                            onChangeText={(text) => setFirstname(text)}
                        />
                        <TextInput

                            style={{ width: responsiveWidth(47.5), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                            placeholder="Last Name"
                            placeholderTextColor="gray"
                            value={lastName}
                            onChangeText={(text) => setLastname(text)}

                        />
                    </View>
                    <View>
                        <TextInput
                            style={{ width: responsiveWidth(95), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                            placeholder="Adress"
                            placeholderTextColor="gray"
                            value={address}
                            onChangeText={(text) => setaddress(text)}
                        />
                        <TextInput

                            style={{ width: responsiveWidth(95), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                            placeholder="City"
                            placeholderTextColor="gray"
                            value={city}
                            onChangeText={(text) => setCity(text)}

                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            style={{ width: responsiveWidth(47.5), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                            placeholder="State"
                            placeholderTextColor="gray"
                            value={stat}
                            onChangeText={(text) => setStat(text)}
                        />
                        <TextInput

                            style={{ width: responsiveWidth(47.5), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                            placeholder="Zip Code"
                            placeholderTextColor="gray"

                        />
                    </View>
                    <View>
                        <TextInput
                            style={{ width: responsiveWidth(95), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                            placeholder="Phone Number"
                            placeholderTextColor="gray"
                            value={mobNumber}
                            onChangeText={(text) => setMobNumber(text)}
                        />
                    </View>
                </View>
                <View >
                    <TouchableOpacity onPress={() => handle()}>
                        <View style={{ width: width, backgroundColor: 'black' }}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2.5), textAlign: 'center', padding: 10 }}>ADD NOW</Text>
                        </View>
                    </TouchableOpacity>

                </View>



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
    input: {

        width: responsiveWidth(50),
        borderWidth: .5,
        backgroundColor: '#F2F3F4',
        padding: 10,

    },

});

export default AddShippingAdress;