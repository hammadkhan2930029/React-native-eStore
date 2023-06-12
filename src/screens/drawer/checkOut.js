import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, ImageBackground, Dimensions, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const CheckOut = (props) => {

    const [isClick, setIsClick] = useState(false)
    let price = 251;
    const [value, setValue] = useState(1)
    const inc = () => {
        setValue(value + 1)
    }
    const dec = () => {
        setValue(value - 1)

    }

    // --------add shippment adress--------
    const navigation = useNavigation();
    const payment = [
        { id: 1, pay: "via Card" },
        { id: 2, pay: "via paypak" },
        { id: 3, pay: "via paypal" },
        { id: 4, pay: "via bitcoin" },

    ]
    const [click, setclick] = useState()


    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [address, setaddress] = useState('')
    const [city, setCity] = useState('')
    const [stat, setStat] = useState('')
    const [mobNumber, setMobNumber] = useState('')
    const [paymentMethod, setpaymentMethod] = useState('Select Payment Method')

    // -----------------------
    const [productname, setProductname] = useState()
    const [productTitle, setProductTitle] = useState()






    const handle = () => {

        navigation.navigate('checkdetails', {
            username: firstName,
            userlastname: lastName,
            useraddress: address,
            usercity: city,
            userstate: stat,
            usermobile: mobNumber,
            paymentMethod: paymentMethod,
            price: price * value,
            producttitle: productTitle
        })
    }




    return (
        // ---------------Top Navbar-----------------
        <SafeAreaView>
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

                            <Text style={{ color: '#DD8560', fontSize: 18, fontWeight: '900' }}>
                                ${price * value}
                            </Text>
                        </View>
                    </View>

                    {/* ----------------Add Shipping Adress Form--------------------- */}
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5), textAlign: 'center' }}>ADD SHIPPING ADRESS</Text>
                        <Image style={{ alignSelf: 'center' }} source={require('../../NewAssets/line.png')} />
                    </View>
                    <View style={{ flexDirection: 'column', width: responsiveWidth(100), height: responsiveHeight(45), justifyContent: 'space-between', alignSelf: 'center' }}>


                        <View style={{ width: responsiveWidth(90), alignSelf: 'center', marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <TextInput
                                    style={{ width: responsiveWidth(45), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                                    placeholder="First Name"
                                    placeholderTextColor="gray"
                                    value={firstName}
                                    onChangeText={(text) => setFirstname(text)}
                                />
                                <TextInput

                                    style={{ width: responsiveWidth(45), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                                    placeholder="Last Name"
                                    placeholderTextColor="gray"
                                    value={lastName}
                                    onChangeText={(text) => setLastname(text)}

                                />
                            </View>
                            <View>
                                <TextInput
                                    style={{ width: responsiveWidth(90), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                                    placeholder="Adress"
                                    placeholderTextColor="gray"
                                    value={address}
                                    onChangeText={(text) => setaddress(text)}
                                />
                                <TextInput

                                    style={{ width: responsiveWidth(90), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                                    placeholder="City"
                                    placeholderTextColor="gray"
                                    value={city}
                                    onChangeText={(text) => setCity(text)}

                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <TextInput
                                    style={{ width: responsiveWidth(45), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                                    placeholder="State"
                                    placeholderTextColor="gray"
                                    value={stat}
                                    onChangeText={(text) => setStat(text)}
                                />
                                <TextInput

                                    style={{ width: responsiveWidth(45), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                                    placeholder="Zip Code"
                                    placeholderTextColor="gray"

                                />
                            </View>
                            <View>
                                <TextInput
                                    style={{ width: responsiveWidth(90), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5, color: 'black' }}
                                    placeholder="Phone Number"
                                    placeholderTextColor="gray"
                                    value={mobNumber}
                                    onChangeText={(text) => setMobNumber(text)}
                                />
                            </View>

                        </View>
                    </View>

                    {/* ----------------Add payment method--------------------- */}

                    <View>

                        <TouchableOpacity onPress={() => setclick(!click)}>
                            <View style={{ width: responsiveWidth(90), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', padding: 10, borderBottomColor: 'gray', borderBottomWidth: .5, }}>
                                <Text style={{ color: '#000', fontSize: responsiveFontSize(2) }}>{paymentMethod === '' ? "Select payment Maythod" : paymentMethod}</Text>

                                <Image source={require('../../NewAssets/apperal/ForwardDown.png')} />
                            </View>
                        </TouchableOpacity>
                        {click ? <View style={{ width: responsiveWidth(80), alignSelf: 'center' }}>
                            {payment.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => {
                                        setpaymentMethod(item.pay)
                                        setclick(false)
                                    }}>
                                        <Text style={{ color: '#888888', fontSize: responsiveFontSize(2), lineHeight: 30 }} >{item.pay}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View> : null}


                    </View>
                    <TouchableOpacity onPress={() => handle()}>
                        <View style={style.checkoutBtn}>
                            <View>
                                <Image source={require('../../NewAssets/apperal/bag2.png')} />
                            </View>
                            <View>
                                <Text style={{ color: 'white', fontSize: 20, paddingLeft: 10, letterSpacing: 3 }}>CHECKOUT</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* ------------------------------- */}
                </View>

            </ScrollView>


           
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
    checkoutBtn: {
        width: responsiveWidth(95),
        backgroundColor: 'black',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 10
    }

});

export default CheckOut;