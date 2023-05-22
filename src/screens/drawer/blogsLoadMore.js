import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, FlatList, StyleSheet, Image } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


const { width, height } = Dimensions.get('screen')

const LoadMore = ({ navigation }) => {


    const Arr = [
        { id: 1, listName: 'Fashion' },
        { id: 2, listName: 'Promo' },
        { id: 3, listName: 'Policy' },
        { id: 4, listName: 'Lookbook' },
        { id: 5, listName: 'Promo' },
        { id: 6, listName: 'LookBook' },
        { id: 7, listName: 'Policy' },
        { id: 8, listName: 'Fashion' },

    ];

    const [data, SetData] = useState(Arr);

    // --------------------blogs cards list-------------------

    const loadMoreCards = [
        { id: 1, image: require('../../NewAssets/blogsImage.png'), headingText: "2021 Style Guide The Biggest Fall Trends", text: 'The Excitment of All Fachion is here and  i m already loving' },
        { id: 2, image: require('../../NewAssets/blogsImage.png'), headingText: "2021 Style Guide The Biggest Fall Trends", text: 'The Excitment of All Fachion is here and  i m already loving' },
        { id: 3, image: require('../../NewAssets/blogsImage.png'), headingText: "2021 Style Guide The Biggest Fall Trends", text: 'The Excitment of All Fachion is here and  i m already loving' },
        { id: 4, image: require('../../NewAssets/blogsImage.png'), headingText: "2021 Style Guide The Biggest Fall Trends", text: 'The Excitment of All Fachion is here and  i m already loving' },
        { id: 5, image: require('../../NewAssets/blogsImage.png'), headingText: "2021 Style Guide The Biggest Fall Trends", text: 'The Excitment of All Fachion is here and  i m already loving' },
        { id: 6, image: require('../../NewAssets/blogsImage.png'), headingText: "2021 Style Guide The Biggest Fall Trends", text: 'The Excitment of All Fachion is here and  i m already loving' },
        { id: 7, image: require('../../NewAssets/blogsImage.png'), headingText: "2021 Style Guide The Biggest Fall Trends", text: 'The Excitment of All Fachion is here and  i m already loving' },

    ]
    return (
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>

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
            {/* --------------Heading------- */}
            <View style={{ padding: 10, alignSelf: 'center', width: '40%' }}>
                <Text style={{ color: 'black', fontSize: 26, textAlign: 'center' }}>BLOGS</Text>
                <View style={{ alignSelf: 'center', margin: 10 }}>
                    <Image source={require('../../NewAssets/line.png')} />
                </View>
            </View>
            {/* ------------list-------------- */}
            <View>
                <FlatList data={data}
                    horizontal
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity>
                                <View style={style.view} key={index}>
                                    <Text style={{ color: 'black', fontSize: responsiveFontSize(3) }}>{item.listName}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
            {/* // --------------------blogs cards list------------------- */}

            <ScrollView>
                <View>
                    {loadMoreCards.map((item, index) => {
                        return (
                            <View key={index} style={{ width: responsiveWidth(95), height: height / 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', margin: 5 , backgroundColor: "#F9F9F9"}}>
                                <View>
                                    <Image style={{ resizeMode: 'contain', width: width - 220, height: 200, margin: 5 }} source={item.image} />
                                </View>
                                <View style={{ width: 180, margin: 5 }}>
                                    <Text style={{ color: 'black', fontSize: responsiveFontSize(3) }}>{item.headingText}</Text>
                                    <Text style={{ color: 'gray', fontSize: responsiveFontSize(2) }}>{item.text}</Text>

                                </View>
                            </View>
                        )
                    })}
                </View>
                 {/* ------------Load more btn------------------- */}
{/* 
                 <TouchableOpacity>
                    <View style={{ width: 170, flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'black', padding: 5, margin: 20 }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>LOAD MORE</Text>
                        <Icon name='plus' size={30} color='black' />
                    </View>
                </TouchableOpacity> */}

                {/* ------------bottom--------------------- */}
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
    // --------------heading and list ------------------
    h1: {
        backgroundColor: 'black',
        borderRadius: 50,
        padding: 15,
        width: '60%',
        alignSelf: 'center',
        marginTop: -110,
        opacity: .7
    },
    view: {
        padding: 10,
        margin: 5,
        borderRadius: 30,
        backgroundColor: "#F9F9F9",
        marginTop: 15
    },
});

export default LoadMore;