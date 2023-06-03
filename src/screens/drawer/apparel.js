import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const Apparel = () => {


    const navigation = useNavigation();
    const apparelList = [
        { id: 1, cardImage: require("../../NewAssets/apperal/image1.png"), productName: 'Lamgre', details: 'Reversable Androna Cardio', price: "$ 213" },
        { id: 2, cardImage: require("../../NewAssets/apperal/image2.png"), productName: 'Lamgre', details: 'Reversable Androna Cardio', price: "$ 213" },
        { id: 3, cardImage: require("../../NewAssets/apperal/image3.png"), productName: 'Lamgre', details: 'Reversable Androna Cardio', price: "$ 213" },
        { id: 4, cardImage: require("../../NewAssets/apperal/image4.png"), productName: 'Lamgre', details: 'Reversable Androna Cardio', price: "$ 213" },
        { id: 5, cardImage: require("../../NewAssets/apperal/image5.png"), productName: 'Lamgre', details: 'Reversable Androna Cardio', price: "$ 213" },
        { id: 6, cardImage: require("../../NewAssets/apperal/image6.png"), productName: 'Lamgre', details: 'Reversable Androna Cardio', price: "$ 213" },

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
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(3) }}>APPAREL</Text>
                </View>
                <View style={{ width: 120, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F3F4', borderRadius: 20, padding: 5, marginLeft: -15, marginRight: 5 }}>
                            <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5) }}>New</Text>
                            <Image style={{ resizeMode: 'contain', width: responsiveWidth(5) }} source={require('../../NewAssets/apperal/down.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('apparelGrid') }}>
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

            {/* { isClick ? <View style={style.toggle}>
                <TouchableOpacity onPress={() => navigation.navigate('apparel')}>
                    <Text style={style.toggleText}>Grid View</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('apparelGrid')}>
                    <Text style={style.toggleText}>list View</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('apparelFullView')}}>
                    <Text style={style.toggleText}>Full View</Text>
                </TouchableOpacity>
            </View> : null} */}
            {/* -------------Cards View----------------- */}
            <ScrollView>
                <View style={{ padding: 5, width: responsiveWidth(100), alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {apparelList.map((item, index) => {
                        return (
                            <View style={{ width: responsiveWidth(48) }} key={index}>
                                <View>
                                    <Image style={{ resizeMode: 'contain', width: responsiveWidth(48) }} source={item.cardImage} />
                                </View>
                                <View style={{ marginLeft: '80%', marginTop: 190, position: 'absolute' }}>
                                    <TouchableOpacity>
                                        <Image source={require('../../NewAssets/apperal/Heart.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{ color: '#555555', fontSize: responsiveFontSize(2.5) }}>{item.productName}</Text>
                                    <Text style={{ color: '#555555', fontSize: responsiveFontSize(1.8) }} >{item.details}</Text>
                                    <Text style={{ color: '#DD8560', fontSize: responsiveFontSize(2), fontWeight: 'bold' }}>{item.price}</Text>

                                </View>
                            </View>
                        )
                    })}
                </View>


                {/* ------------pages no Btn------------- */}

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 40 }}>
                    {apparelList.map((item, index) => {
                        return (
                            <View style={{ margin: 3, backgroundColor: 'gray', borderRadius: 10, width: responsiveWidth(10), padding:5 }} key={index}>
                                <Text style={{ color: 'white', fontSize: responsiveFontSize(2.8),  textAlign: 'center' }}>{item.id}</Text>
                            </View>
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
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5), textAlign: 'center', margin: 5 }}>support@openui.design</Text>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5), textAlign: 'center', margin: 5 }}>+60 825 876</Text>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5), textAlign: 'center', margin: 5 }}>08:00 - 22:00 - Everyday</Text>
                </View>

                <View style={{ alignSelf: 'center', margin: 10 }}>
                    <Image source={require('../../NewAssets/line.png')} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: 10, margin: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('home')}>
                        <Text style={{ color: 'black', fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('contact')}>
                        <Text style={{ color: 'black', fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('blogs')}>
                        <Text style={{ color: 'black', fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>Blog</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 15, backgroundColor: '#F2F3F4' }}>
                    <Text style={{ color: 'gray', fontSize: responsiveFontSize(2), textAlign: 'center' }}>Copyright© OpenUI All Rights Reserved.</Text>
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

export default Apparel;