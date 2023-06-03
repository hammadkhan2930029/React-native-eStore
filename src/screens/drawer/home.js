import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, ScrollView, Dimensions, ImageBackground, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


const Home = ({ navigation }) => {

    const cardData = [
        { id: 1, image: require('../../NewAssets/model.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 2, image: require('../../NewAssets/model.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 3, image: require('../../NewAssets/model.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 4, image: require('../../NewAssets/model.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 5, image: require('../../NewAssets/model.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 6, image: require('../../NewAssets/model.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
    ]

    const card = [
        { id: 1, image: require('../../assets/card.png'), details: "21WN reversible angora cardigan ", pri: "$250" },
        { id: 2, image: require('../../assets/card.png'), details: "21WN reversible angora cardigan ", pri: "$250" },
        { id: 3, image: require('../../assets/card.png'), details: "21WN reversible angora cardigan ", pri: "$250" },
        { id: 4, image: require('../../assets/card.png'), details: "21WN reversible angora cardigan ", pri: "$250" },
        { id: 5, image: require('../../assets/card.png'), details: "21WN reversible angora cardigan ", pri: "$250" },
        { id: 6, image: require('../../assets/card.png'), details: "21WN reversible angora cardigan ", pri: "$250" },
    ]

    return (

        <SafeAreaView style={{ backgroundColor: 'white' }}>
            {/* ----------Top NavBar--------- */}
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
                    <TouchableOpacity onPress={() => navigation.navigate('checkOut')}>
                        <View style={style.cartIcon}>
                            <Image source={require('../../NewAssets/shoppingBag.png')} />

                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* ---------------------Main Page View------------- */}
            <ScrollView>
                <ImageBackground style={{ resizeMode: 'contain', width: responsiveWidth(100), height: responsiveHeight(80) }} source={require('../../NewAssets/banner.png')}>
                    <View style={{ padding: 30, marginTop: '50%', opacity: .8 }}>
                        <Text style={{ color: '#333333', fontSize: responsiveFontSize(5), fontWeight: 'bold' }}>LUXURY</Text>
                        <Text style={{ color: '#333333', fontSize: responsiveFontSize(5), fontWeight: 'bold', marginLeft: 15 }}>FASHION</Text>
                        <Text style={{ color: '#333333', fontSize: responsiveFontSize(5), fontWeight: 'bold' }}>&ACCESSORIES</Text>
                    </View>
                    {/* ------Explore Collection Btn---- */}
                    <TouchableOpacity onPress={() => navigation.navigate('collectionDetails')}>
                        <View style={style.h1}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: responsiveFontSize(2.5), fontWeight: 'bold' }}>EXPLORE COLLECTION</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>



                {/* ------------New Arrival Cards--------- */}


                <View>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 24, marginTop: 20 }}>NEW ARRIVAL</Text>
                    <View style={{ alignSelf: 'center', margin: 10 }}>
                        <Image source={require('../../NewAssets/line.png')} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', width: responsiveWidth(100) }}>
                    {card.map((item, index) => {
                        return (
                            
                                <View style={style.card} >
                                    <Image style={style.cardImage} source={item.image} />
                                    <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>{item.details} </Text>
                                    <Text style={{ color: 'orange', fontSize: 20, textAlign: 'center' }}>{item.pri}</Text>
                                </View>
                            

                        )
                    })}

                </View>


                {/* ---------explore More Btn-------------- */}
                <TouchableOpacity onPress={() =>  navigation.navigate('collectionBlack') }>
                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>Explore More</Text>
                        <Icon name="arrow-right" color='black' size={30} />

                    </View>
                </TouchableOpacity>

                <View style={{ alignSelf: 'center', margin: 10 }}>
                    <Image source={require('../../NewAssets/line.png')} />
                </View>

                {/* -----------Brands Logo---------- */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: responsiveWidth(100), flexWrap: 'wrap', height: responsiveHeight(25), padding: 5 }} >
                    <Image style={{ resizeMode: 'contain', width: responsiveWidth(30), height: responsiveHeight(10) }} source={require('../../assets/Zara-Logo.png')} />
                    <Image style={{ resizeMode: 'contain', width: responsiveWidth(30), height: responsiveHeight(10) }} source={require('../../assets/Zara-Logo.png')} />
                    <Image style={{ resizeMode: 'contain', width: responsiveWidth(30), height: responsiveHeight(10) }} source={require('../../assets/Zara-Logo.png')} />
                    <Image style={{ resizeMode: 'contain', width: responsiveWidth(30), height: responsiveHeight(10) }} source={require('../../assets/Zara-Logo.png')} />
                    <Image style={{ resizeMode: 'contain', width: responsiveWidth(30), height: responsiveHeight(10) }} source={require('../../assets/Zara-Logo.png')} />
                    <Image style={{ resizeMode: 'contain', width: responsiveWidth(30), height: responsiveHeight(10) }} source={require('../../assets/Zara-Logo.png')} />
                </View>

                <View style={{ alignSelf: 'center' }}>
                    <Image source={require('../../NewAssets/line.png')} />
                </View>

                {/* ------Collections---------- */}

                <View>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(3.5), textAlign: 'center', marginTop: 40 }}>COLLECTIONS</Text>
                </View>

                <View style={{ marginTop: -50, width: responsiveWidth(100) }}>
                    <Image style={{ resizeMode: 'contain', width: responsiveWidth(100) }} source={require('../../assets/collection.png')} />
                </View>

                <View >
                    <Image style={{ resizeMode: 'contain', width: responsiveWidth(80), height: 400, alignSelf: 'center' }} source={require('../../assets/collection-one.png')} />
                </View>


                {/* ----------Just For You-------- */}
                <View>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 24, marginTop: 40 }}>JUST FOR YOU</Text>
                    <View style={{ alignSelf: 'center', margin: 10 }}>
                        <Image source={require('../../NewAssets/line.png')} />
                    </View>
                </View>

                {/* -----------scroll horizontal cards-------------- */}
                <ScrollView horizontal>
                    <View style={{ flexDirection: 'row' }} >
                        {cardData.map((item, index) => {
                            return (
                                <View style={style.scrollCard} >
                                    <Image style={{ resizeMode: 'contain', alignSelf: 'center', width: responsiveWidth(80), height: responsiveHeight(50) }} source={(item.image)} />
                                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 18, marginTop: -10 }}>{item.detail}</Text>
                                    <Text style={{ color: "orange", fontSize: 24, textAlign: 'center', margin: 5 }}>{item.price}</Text>
                                </View>

                            )
                        })}
                    </View>
                </ScrollView>






                {/* --------trending-------------- */}
                <View>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 32, marginTop: 40 }}>@TRENDING</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 20 }}>
                        <Text style={style.trendingCard}>#design</Text>
                        <Text style={style.trendingCard}>#2023</Text>
                        <Text style={style.trendingCard}>#style</Text>
                        <Text style={style.trendingCard}>#style</Text>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 20 }}>


                        <Text style={style.trendingCard}>#design</Text>
                        <Text style={style.trendingCard}>#2023</Text>
                        <Text style={style.trendingCard}>#style</Text>
                        <Text style={style.trendingCard}>#style</Text>


                    </View>


                </View>

                {/* -///////--------------------------- */}

                <View style={{ backgroundColor: '#F2F2F2', marginTop: 20, padding: 15 }}>
                    <View>
                        <Image style={{ resizeMode: 'contain', width: 100, alignSelf: 'center' }} source={require('../../NewAssets/logo.png')} />
                        <Text style={{ color: 'black', textAlign: 'center', fontSize: 18, padding: 15 }}>Making a luxurious lifestyle accessible
                            for a generous group of women is our
                            daily drive.</Text>
                        <View style={{ alignSelf: 'center', margin: 10 }}>
                            <Image source={require('../../NewAssets/line.png')} />
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                        <View style={{ flexDirection: 'column', padding: 15, alignSelf: 'center' }}>
                            <Image style={style.iconscard} source={require('../../NewAssets/StickerOne.png')} />
                            <View style={{ width: 100, margin: 10 }}>

                                <Text style={{ color: 'black', fontSize: responsiveFontSize(2.3), textAlign: 'center' }}>Fast shipping. Free on orders over $25.</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', padding: 15, alignSelf: 'center' }}>
                            <Image style={style.iconscard} source={require('../../NewAssets/StickerTwo.png')} />

                            <View style={{ width: 100, margin: 10 }}>

                                <Text style={{ color: 'black', fontSize: responsiveFontSize(2.3), textAlign: 'center' }}>Fast shipping. Free on orders over $25.</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                        <View style={{ flexDirection: 'column', padding: 15, alignSelf: 'center' }}>
                            <Image style={style.iconscard} source={require('../../NewAssets/StickerThree.png')} />

                            <View style={{ width: 100, margin: 10 }}>

                                <Text style={{ color: 'black', fontSize: responsiveFontSize(2.3), textAlign: 'center' }}>Fast shipping. Free on orders over $25.</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', padding: 15, alignSelf: 'center' }}>
                            <Image style={style.iconscard} source={require('../../NewAssets/StickerFour.png')} />

                            <View style={{ width: 100, margin: 10 }}>

                                <Text style={{ color: 'black', fontSize: responsiveFontSize(2.3), textAlign: 'center' }}>Fast shipping. Free on orders over $25.</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Image style={style.iconscard} source={require('../../NewAssets/StickerFive.png')} />


                    </View>



                </View>

                {/* ---------------Social Media------------- */}
                <Text style={{ color: 'black', textAlign: 'center', fontSize: responsiveFontSize(3.5), padding: 10, letterSpacing: 10 }}>FOLLOW US</Text>

                <Icon style={{ alignSelf: 'center', padding: 10 }} name='instagram' color='black' size={40} />

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: responsiveWidth(100), height: height / 5 }}>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', width: responsiveWidth(40), margin: 5 }} source={require('../../NewAssets/SocialOne.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', width: responsiveWidth(40), margin: 5 }} source={require('../../NewAssets/SocialTwo.png')} />

                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: responsiveWidth(100) }}>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', width: responsiveWidth(40), margin: 5 }} source={require('../../NewAssets/SocialThree.png')} />

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', width: responsiveWidth(40), margin: 5 }} source={require('../../NewAssets/SocialFour.png')} />

                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', margin: 15 }}>
                    <Icon name='twitter' color='black' size={30} />
                    <Icon name='instagram' color='black' size={30} />
                    <Icon name='youtube' color='black' size={30} />


                </View>
                {/* ----------------Bottom---------------- */}
                <View style={{ alignSelf: 'center' }}>
                    <Image source={require('../../NewAssets/line.png')} />
                </View>
                <View style={{ alignSelf: 'center', margin: 10 }}>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5), textAlign: 'center', margin: 5 }}>support@openui.design</Text>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5), textAlign: 'center', margin: 5 }}>+60 825 876</Text>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5), textAlign: 'center', margin: 5 }}>08:00 - 22:00 - Everyday</Text>
                </View>

                <View style={{ alignSelf: 'center' }}>
                    <Image source={require('../../NewAssets/line.png')} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: 10, margin: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('about')}>
                        <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5), fontWeight: 'bold' }}>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('contact')}>
                        <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5), fontWeight: 'bold' }}>Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("blogs")}>
                        <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5), fontWeight: 'bold' }}>Blog</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 15, backgroundColor: '#E7EAEF', marginTop: 15, marginBottom: 10 }}>
                    <Text style={{ color: 'gray', fontSize: responsiveFontSize(2), textAlign: 'center' }}>Copyright© OpenUI All Rights Reserved.</Text>
                </View>

                {/* ---------------------- */}
                <View style={{ padding: 15, margin: 2 }}>
                    <Text>Empty</Text>
                </View>

            </ScrollView>

        </SafeAreaView >


    )
};
const { width, height } = Dimensions.get("screen");

const style = StyleSheet.create({
    // ------------Top navbar-----------
    TopNavbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: '#E7EAEF',
        padding: 10,
        width: responsiveWidth(100)


    },
    SearchAndCard: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    searchIcon: {
        marginRight: 5
    },
    cartIcon: {
        marginRight: 5

    },
    logoImage: {
        resizeMode: 'contain',
        width: 80,
        height: 50
    },
    // ---------------Top navbar----------
    h1: {
        backgroundColor: 'black',
        borderRadius: 50,
        padding: 15,
        width: responsiveWidth(60),
        alignSelf: 'center',
        marginTop: '25%',
        opacity: .7
    },
    // -----------New Arrival Cards-------------
    card: {
        width: responsiveWidth(50),
        height: responsiveHeight(35),


    },
    cardImage: {
        // alignSelf: 'center',
        resizeMode: 'contain',
        width: responsiveWidth(50),
        height: responsiveHeight(20)


    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    // --------------trending------------
    trendingCard: {
        color: "black",
        fontSize: responsiveFontSize(2.5),
        textAlign: 'center',
        borderRadius: 50,
        padding: 10,
        backgroundColor: "#F9F9F9"
    },

    // ------------scrollCard-------
    scrollCard: {
        width: responsiveWidth(100),
        justifyContent: 'center',
        alignSelf: 'center',

    },
    iconscard: {
        resizeMode: 'contain',
        width: 100,
        alignSelf: 'center',
        height: 50,
    }
});



export default Home;