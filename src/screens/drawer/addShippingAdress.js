import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { TextInput } from 'react-native-gesture-handler';

const AddShippingAdress = () => {


    const navigation = useNavigation();


    const [isClick, setIsClick] = useState(false)


    return (
        // ---------------Top Navbar-----------------
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={style.TopNavbar}>
                <TouchableOpacity>
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
                    <TouchableOpacity>
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
            <View style={{flexDirection: 'column', justifyContent: 'space-between', height: responsiveHeight(85) }}>


                <View style={{ width: responsiveWidth(95), alignSelf: 'center', marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            style={{ width: responsiveWidth(47.5), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5 }}
                            placeholder="First Name"
                            placeholderTextColor="gray"
                        />
                        <TextInput

                            style={{ width: responsiveWidth(47.5), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5 }}
                            placeholder="Last Name"
                            placeholderTextColor="gray"

                        />
                    </View>
                    <View>
                        <TextInput
                            style={{ width: responsiveWidth(95), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5 }}
                            placeholder="Adress"
                            placeholderTextColor="gray"
                        />
                        <TextInput

                            style={{ width: responsiveWidth(95), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5 }}
                            placeholder="City"
                            placeholderTextColor="gray"

                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            style={{ width: responsiveWidth(47.5), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5 }}
                            placeholder="State"
                            placeholderTextColor="gray"
                        />
                        <TextInput

                            style={{ width: responsiveWidth(47.5), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5 }}
                            placeholder="Zip Code"
                            placeholderTextColor="gray"

                        />
                    </View>
                    <View>
                        <TextInput
                            style={{ width: responsiveWidth(95), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5 }}
                            placeholder="Phone Number"
                            placeholderTextColor="gray"
                            keyboardType='numeric'

                        />
                    </View>
                </View>



                <View style={{ width: width, backgroundColor: 'black', padding: 15 }}>
                    <TouchableOpacity>
                        <View>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2.5), textAlign: 'center' }}>ADD NOW</Text>
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