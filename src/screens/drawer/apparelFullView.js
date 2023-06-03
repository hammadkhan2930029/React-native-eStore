import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const ApparelFullView = () => {
    const navigation = useNavigation();
    const apparelFullView = [
        { id: 1, cardImage: require("../../NewAssets/apperal/fullView1.png"), productName: 'Mohan', details: 'Reversable Androna Cardio', price: "$ 213" },
        { id: 2, cardImage: require("../../NewAssets/apperal/fullView2.png"), productName: 'Mohan', details: 'Reversable Androna Cardio', price: "$ 213" },
        { id: 3, cardImage: require("../../NewAssets/apperal/fullView3.png"), productName: 'Mohan', details: 'Reversable Androna Cardio', price: "$ 213" },
        { id: 4, cardImage: require("../../NewAssets/apperal/fullView1.png"), productName: 'Mohan', details: 'Reversable Androna Cardio', price: "$ 213" },
        { id: 5, cardImage: require("../../NewAssets/apperal/fullView2.png"), productName: 'Mohan', details: 'Reversable Androna Cardio', price: "$ 213" },
        { id: 6, cardImage: require("../../NewAssets/apperal/fullView3.png"), productName: 'Mohan', details: 'Reversable Androna Cardio', price: "$ 213" },

    ]

    const [isClick, setIsClick] = useState(false)
    return (
        // ---------------Top Navbar-----------------
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
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
            {/* ---------apparel and filter----------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <View>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(3) }}>APPAREL FULL VIEW</Text>
                </View>
                <View style={{ width: 120, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F3F4', borderRadius: 20, padding: 5, marginLeft: -15, marginRight: 5 }}>
                            <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5) }}>New</Text>
                            <Image style={{ resizeMode: 'contain', width: responsiveWidth(5) }} source={require('../../NewAssets/apperal/down.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={{ backgroundColor: '#F2F3F4', borderRadius: 20, marginRight: 5, width: responsiveWidth(10), height: responsiveHeight(5), alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../NewAssets/apperal/Listview.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ backgroundColor: '#F2F3F4', borderRadius: 20, marginRight: 5, width: responsiveWidth(10), height: responsiveHeight(5), alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../NewAssets/apperal/Filter.png')} />
                        </View>
                    </TouchableOpacity>


                </View>
            </View>
            

            {/* -------------Cards Full View----------------- */}
            <ScrollView>
                <View style={{ marginTop: 15 }}>
                    {apparelFullView.map((item, index) => {
                        return (
                            <View style={{ width: responsiveWidth(100), padding: 10 }} key={index}>
                                <Image style={{ alignSelf: 'center', width: responsiveWidth(95)}} source={item.cardImage} />
                                <Text style={{ color: '#000000', fontSize: responsiveFontSize(3), margin: 4 }}>{item.productName}</Text>
                                <View style={{ width: responsiveWidth(95), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#555555', fontSize: responsiveFontSize(2.5) }}>{item.details}</Text>
                                    <Text style={{ color: '#DD8560', fontSize: responsiveFontSize(3)  }}>{item.price}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>



                {/* ------------pages no Btn------------- */}

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                    {apparelFullView.map((item, index) => {
                        return (
                            <TouchableOpacity>
                                <View style={{ margin: 3, backgroundColor: 'gray', borderRadius: 10, width: 40, height: 40 }} key={index}>
                                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', padding: 10 }}>{item.id}</Text>
                                </View>
                            </TouchableOpacity>

                        )
                    })}
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
        padding: 10

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
    // toggle: {
    //     width: 250,
    //     padding: 5,
    //     textAlign: 'center',
    //     position: 'absolute',
    //     marginLeft: 110,
    //     marginTop: 115,
    //     flexDirection: 'row',
    //     justifyContent: 'space-evenly'
    // },
    // toggleText: {
    //     color: '#000000',
    //     fontSize: 16,
    //     backgroundColor: '#F2F3F4',
    //     borderRadius: 15,
    //     padding: 6
    // }
});

export default ApparelFullView;