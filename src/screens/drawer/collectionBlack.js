import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';


const CollectionBlack = () => {
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
                <TouchableOpacity>
                    <View style={style.drawerBtnView}>
                        <Image source={require('../../NewAssets/blackTheem/Menu.png')} />

                    </View>
                </TouchableOpacity>

                <View style={style.Logo}>
                    <Image style={style.logoImage} source={require('../../NewAssets/blackTheem/Logo.png')} />
                </View>

                <View style={style.SearchAndCard}>
                    <TouchableOpacity>
                        <View style={style.searchIcon}>
                            <Image source={require('../../NewAssets/blackTheem/Search.png')} />

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={style.cartIcon}>
                            <Image source={require('../../NewAssets/blackTheem/bag.png')} />

                        </View>
                    </TouchableOpacity>

                </View>

            </View>
            {/* -------------Black Them View----------------- */}
            <ScrollView >
                <View style={{ backgroundColor: 'black', width: width }}>
                    <ImageBackground style={{ resizeMode: 'contain', width: 200, height: 100, alignSelf: 'center' }} source={require('../../NewAssets/blackTheem/10.png')}>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 30, textAlign: 'center', color: 'white' }}>OCTUBER</Text>
                            <Text style={{ fontSize: 18, textAlign: 'center', color: "white", letterSpacing: 5 }}>COLLECTION</Text>
                        </View>

                    </ImageBackground>
                    <View>
                        <View style={{ alignSelf: 'center' }}>
                            <Image style={{ width: width - 20, height: height / 2 }} source={require('../../NewAssets/blackTheem/image4.png')} />
                            <Image style={{ position: 'absolute', marginTop: 220, marginLeft: 170 }} source={require('../../NewAssets/blackTheem/10.png')} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - 60, alignSelf: 'center', margin: 5 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>01</Text>
                            <Image source={require('../../NewAssets/blackTheem/Line.png')} />
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>BLACK COLLECTION</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image style={{ width: width - 20, height: height / 2 }} source={require('../../NewAssets/blackTheem/image3.png')} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - 60, alignSelf: 'center', margin: 5 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>02</Text>
                            <Image source={require('../../NewAssets/blackTheem/Line.png')} />
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>BLACK COLLECTION</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 40 ,marginBottom:40}}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image style={{ width: width - 20, height: height / 2 }} source={require('../../NewAssets/blackTheem/image2.png')} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - 60, alignSelf: 'center', margin: 5 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>03</Text>
                            <Image source={require('../../NewAssets/blackTheem/Line.png')} />
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>BLACK COLLECTION</Text>
                        </View>
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
        backgroundColor: 'black',
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

});

export default CollectionBlack;