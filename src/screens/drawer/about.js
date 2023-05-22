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

const About = () => {


    const navigation = useNavigation();

    return (
        // ---------------Top Navbar-----------------
        <SafeAreaView style={{ backgroundColor: 'white', height: responsiveHeight(100) }}>
            <View style={style.TopNavbar}>
                <TouchableOpacity onPress={() => {navigation.openDrawer()}}>
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

            <ScrollView>
                <View style={{ width: responsiveWidth(95), alignSelf: 'center' }}>
                    <View>
                        <Text style={{ fontSize: responsiveFontSize(3.5), color: 'black', textAlign: 'center', padding: 10 }}>OUR STORY</Text>
                        <Image style={{ alignSelf: 'center' }} source={require('../../NewAssets/line.png')} />
                    </View>
                    <View>
                        <Text style={{ color: "gray", fontSize: responsiveFontSize(2), padding: 5 }}>the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Image style={{ resizeMode: 'contain', width: responsiveWidth(95) }} source={require('../../NewAssets/apperal/aboutImage.png')} />
                    </View>
                    <View>
                        <Text style={{ fontSize: responsiveFontSize(3), color: 'black', textAlign: 'center', padding: 10 }}>SIGN UP</Text>
                        <Image style={{ alignSelf: 'center' }} source={require('../../NewAssets/line.png')} />
                    </View>
                    <View>
                        <TextInput
                            style={{ width: responsiveWidth(95), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5 }}
                            placeholder="Email Adress"
                            placeholderTextColor="gray"


                        />
                        <TextInput
                            style={{ width: responsiveWidth(95), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5 }}
                            placeholder="Full Name"
                            placeholderTextColor="gray"
                        />
                        <TextInput
                            style={{ width: responsiveWidth(95), padding: 15, borderBottomColor: 'gray', borderBottomWidth: .5 }}
                            placeholder="Password"
                            placeholderTextColor="gray"
                        />
                    </View>
                    <View style={{ backgroundColor: 'black', padding: 15, marginVertical: 40 }}>
                        <TouchableOpacity>
                            <View>
                                <Text style={{ color: 'white', fontSize: responsiveFontSize(2.5), textAlign: 'center' }}>Submit</Text>
                            </View>
                        </TouchableOpacity>

                    </View>



                </View>





                {/* ------------Bottom---------------- */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', margin: 15 }}>
                    <Icon name='twitter' color='black' size={40} />
                    <Icon name='instagram' color='black' size={40} />
                    <Icon name='youtube' color='black' size={40} />
                </View>

                <View style={{ alignSelf: 'center', margin: 10 }}>
                    <Image source={require('../../NewAssets/line.png')} />
                </View>
                <View style={{ alignSelf: 'center', margin: 10 }}>
                    <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 5 }}>support@openui.design</Text>
                    <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 5 }}>+60 825 876</Text>
                    <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 5 }}>08:00 - 22:00 - Everyday</Text>
                </View>

                <View style={{ alignSelf: 'center', margin: 10 }}>
                    <Image source={require('../../NewAssets/line.png')} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: 10, margin: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('home')}>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('contact')}>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('blogs')}>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Blog</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 15, backgroundColor: '#F2F3F4' }}>
                    <Text style={{ color: 'gray', fontSize: 16, textAlign: 'center' }}>Copyright© OpenUI All Rights Reserved.</Text>
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
        padding: 5,
        backgroundColor: '#FFFFFF',
        padding: 10,
        width: responsiveWidth(100)

    },
    SearchAndCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '12%'

    },
    searchIcon: {
        marginRight: 2
    },
    cartIcon: {
        marginRight: 5

    },

    logoImage: {
        resizeMode: 'contain',
        width: 80,
        height: 50
    },

});

export default About;