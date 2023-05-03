import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, ScrollView, Dimensions, ImageBackground, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
// import VideoPlayer from 'react-native-video-player'


const Home = () => {
    const navigation = useNavigation();

    const cardData = [
        { id: 1, image: require('../../NewAssets/model.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 2, image: require('../../NewAssets/model.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 3, image: require('../../NewAssets/model.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 4, image: require('../../NewAssets/model.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 5, image: require('../../NewAssets/model.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 6, image: require('../../NewAssets/model.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
    ]
    const [data, SetData] = useState(cardData);
    const [currentIndex, setCurrentIndex] = useState(0)

    return (

        <SafeAreaView style={{ backgroundColor: 'white' }}>
            {/* ----------Top NavBar--------- */}
            <View style={style.TopNavbar}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
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
                <ImageBackground style={{ resizeMode: 'contain', width: width, height: 600 }} source={require('../../NewAssets/banner.png')}>
                    <View style={{ padding: 30, marginTop: '50%', opacity: .8 }}>
                        <Text style={{ color: '#333333', fontSize: 42, fontWeight: 'bold' }}>LUXURY</Text>
                        <Text style={{ color: '#333333', fontSize: 42, fontWeight: 'bold', marginLeft: 15 }}>FASHION</Text>
                        <Text style={{ color: '#333333', fontSize: 42, fontWeight: 'bold' }}>&ACCESSORIES</Text>
                    </View>
                    {/* ------Explore Collection Btn---- */}
                    <TouchableOpacity>
                        <View style={style.h1}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>EXPLORE COLLECTION</Text>
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

                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <View style={style.card}>
                        <Image style={style.cardImage} source={require('../../assets/card.png')} />
                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>21WN reversible angora cardigan </Text>
                        <Text style={{ color: 'orange', fontSize: 20, textAlign: 'center' }}>$120</Text>
                    </View>
                    <View style={style.card}>
                        <Image style={style.cardImage} source={require('../../assets/card.png')} />
                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>21WN reversible angora cardigan </Text>
                        <Text style={{ color: 'orange', fontSize: 20, textAlign: 'center' }}>$120</Text>

                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <View style={style.card}>
                        <Image style={style.cardImage} source={require('../../assets/card.png')} />
                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>21WN reversible angora cardigan </Text>
                        <Text style={{ color: 'orange', fontSize: 20, textAlign: 'center' }}>$120</Text>
                    </View>
                    <View style={style.card}>
                        <Image style={style.cardImage} source={require('../../assets/card.png')} />
                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>21WN reversible angora cardigan </Text>
                        <Text style={{ color: 'orange', fontSize: 20, textAlign: 'center' }}>$120</Text>

                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <View style={style.card}>
                        <Image style={style.cardImage} source={require('../../assets/card.png')} />
                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>21WN reversible angora cardigan </Text>
                        <Text style={{ color: 'orange', fontSize: 20, textAlign: 'center' }}>$120</Text>
                    </View>
                    <View style={style.card}>
                        <Image style={style.cardImage} source={require('../../assets/card.png')} />
                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>21WN reversible angora cardigan </Text>
                        <Text style={{ color: 'orange', fontSize: 20, textAlign: 'center' }}>$120</Text>

                    </View>

                </View>

                {/* ---------explore More Btn-------------- */}
                <TouchableOpacity>
                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>Explore More</Text>
                        <Icon name="arrow-right" color='black' size={30} />

                    </View>
                </TouchableOpacity>

                <View style={{ alignSelf: 'center', margin: 10 }}>
                    <Image source={require('../../NewAssets/line.png')} />
                </View>

                {/* -----------Brands Logo---------- */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }} >
                    <Image style={{ resizeMode: 'contain', width: 100, height: 50 }} source={require('../../assets/Zara-Logo.png')} />
                    <Image style={{ resizeMode: 'contain', width: 100, height: 50 }} source={require('../../assets/Zara-Logo.png')} />
                    <Image style={{ resizeMode: 'contain', width: 100, height: 50 }} source={require('../../assets/Zara-Logo.png')} />

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                    <Image style={{ resizeMode: 'contain', width: 100, height: 50 }} source={require('../../assets/Zara-Logo.png')} />
                    <Image style={{ resizeMode: 'contain', width: 100, height: 50 }} source={require('../../assets/Zara-Logo.png')} />
                    <Image style={{ resizeMode: 'contain', width: 100, height: 50 }} source={require('../../assets/Zara-Logo.png')} />


                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Image source={require('../../NewAssets/line.png')} />
                </View>

                {/* ------Collections---------- */}

                <View>
                    <Text style={{ color: 'black', fontSize: 26, textAlign: 'center', marginTop: 40 }}>COLLECTIONS</Text>
                </View>

                <View style={{ marginTop: -50, width: width }}>
                    <Image style={{ resizeMode: 'contain', width: width }} source={require('../../assets/collection.png')} />
                </View>

                <View >
                    <Image style={{ resizeMode: 'contain', width: '80%', height: 400, alignSelf: 'center' }} source={require('../../assets/collection-one.png')} />
                </View>
                {/* ----------------Video--------------- */}
                {/* <View>
                    <VideoPlayer
                        video={require('../../assets/video.mp4')}
                        videoHeight={600}
                        thumbnail={require('../../assets/thumnail.png')}
                        autoplay
                    />
                </View> */}
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
                                 <View style={style.scrollCard} key={index}>
                                        <Image style={{ resizeMode: 'contain', alignSelf: 'center', width: width - 70, height: height / 2 }} source={(item.image)} />
                                        <Text style={{ color: 'black', textAlign: 'center', fontSize: 18, marginTop: -10 }}>{item.detail}</Text>
                                        <Text style={{ color: "orange", fontSize: 24, textAlign: 'center', margin: 5 }}>{item.price}</Text>
                                    </View>
                                
                            )
                        })}
                    </View>
                </ScrollView>


                {/* <View style={{ flexDirection: 'row' }}>

                    <FlatList
                        horizontal
                        data={data}
                        pagingEnabled
                        onScroll={e => {
                            const x = e.nativeEvent.contentOffset.x;
                            setCurrentIndex((x / width).toFixed(0))
                        }}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={style.scrollCard} key={index}>
                                    <Image style={{ resizeMode: 'contain', alignSelf: 'center', width: width - 70, height: height / 2 }} source={(item.image)} />
                                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 18, marginTop: -10 }}>{item.detail}</Text>
                                    <Text style={{ color: "orange", fontSize: 24, textAlign: 'center', margin: 5 }}>{item.price}</Text>
                                </View>
                            )
                        }} />

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    {cardData.map((item, index) => {
                        return (
                            <View style={{
                                width: currentIndex == index ? 20 : 8,
                                height: 8,
                                marginLeft: 3,
                                borderRadius: 4,
                                backgroundColor: currentIndex == index ? "gray" : null,
                                borderColor: currentIndex == index ? "gray" : 'black',
                                borderWidth: .5
                            }}></View>
                        )
                    })
                    }
                </View> */}



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

                                <Text style={{ color: 'black', fontSize: 16 }}>Fast shipping. Free on orders over $25.</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', padding: 15, alignSelf: 'center' }}>
                            <Image style={style.iconscard} source={require('../../NewAssets/StickerTwo.png')} />

                            <View style={{ width: 100, margin: 10 }}>

                                <Text style={{ color: 'black', fontSize: 16 }}>Fast shipping. Free on orders over $25.</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                        <View style={{ flexDirection: 'column', padding: 15, alignSelf: 'center' }}>
                            <Image style={style.iconscard} source={require('../../NewAssets/StickerThree.png')} />

                            <View style={{ width: 100, margin: 10 }}>

                                <Text style={{ color: 'black', fontSize: 16 }}>Fast shipping. Free on orders over $25.</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', padding: 15, alignSelf: 'center' }}>
                            <Image style={style.iconscard} source={require('../../NewAssets/StickerFour.png')} />

                            <View style={{ width: 100, margin: 10 }}>

                                <Text style={{ color: 'black', fontSize: 16 }}>Fast shipping. Free on orders over $25.</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Image style={style.iconscard} source={require('../../NewAssets/StickerFive.png')} />


                    </View>



                </View>

                {/* ---------------Social Media------------- */}
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 28, marginTop: 20, letterSpacing: 10 }}>FOLLOW US</Text>

                <Icon style={{ alignSelf: 'center', margin: 10 }} name='instagram' color='black' size={40} />

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: width, height: height / 5 }}>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', width: width - 200, height: height / 4, margin: 5 }} source={require('../../NewAssets/SocialOne.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', width: width - 200, height: height / 4, margin: 5 }} source={require('../../NewAssets/SocialTwo.png')} />

                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: width, height: height / 4 }}>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', width: width - 200, height: height / 4, margin: 5 }} source={require('../../NewAssets/SocialThree.png')} />

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', width: width - 200, height: height / 4, margin: 5 }} source={require('../../NewAssets/SocialFour.png')} />

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
                    <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 5 }}>support@openui.design</Text>
                    <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 5 }}>+60 825 876</Text>
                    <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 5 }}>08:00 - 22:00 - Everyday</Text>
                </View>

                <View style={{ alignSelf: 'center' }}>
                    <Image source={require('../../NewAssets/line.png')} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: 10, margin: 10 }}>
                    <TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('contact')}>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("blogs")}>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Blog</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 15, backgroundColor: '#E7EAEF', marginTop: 15, marginBottom: 10 }}>
                    <Text style={{ color: 'gray', fontSize: 16, textAlign: 'center' }}>Copyright© OpenUI All Rights Reserved.</Text>
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
        padding: 10

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
        width: '60%',
        alignSelf: 'center',
        marginTop: '25%',
        opacity: .7
    },
    // -----------New Arrival Cards-------------
    card: {
        width: '50%',
        height: 300,

    },
    cardImage: {
        alignSelf: 'center',
        width: 160,
        height: 200

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
        fontSize: 20,
        textAlign: 'center',
        borderRadius: 50,
        padding: 10,
        backgroundColor: "#F9F9F9"
    },

    // ------------scrollCard-------
    scrollCard: {
        width: width,
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