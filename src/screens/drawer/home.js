import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, ImageBackground, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import VideoPlayer from 'react-native-video-player'
const { width, height } = Dimensions.get("screen")


const Home = ({ navigation }) => {
    const cardData = [
        { id: 1, image: require('../../assets/collection-one.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 2, image: require('../../assets/collection-one.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 3, image: require('../../assets/collection-one.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 4, image: require('../../assets/collection-one.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 5, image: require('../../assets/collection-one.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },
        { id: 6, image: require('../../assets/collection-one.png'), detail: "Harris Tweed Three button Jacket", price: "$250" },

    ]
    const [data, SetData] = useState(cardData);
    const [currentIndex, setCurrentIndex] = useState(0)



    return (


        <SafeAreaView style={{ backgroundColor: 'white' }}>
            {/* ----------Top NavBar----------- */}
            <View style={style.TopNavbar}>
                <TouchableOpacity onPress={() =>navigation.openDrawer()}>
                    <View style={style.drawerBtnView}>
                        <Icon name='menu' color='black' size={30} />
                    </View>
                </TouchableOpacity>

                <View style={style.Logo}><Image style={style.logoImage} source={require('../../assets/logo.png')} /></View>

                <View style={style.SearchAndCard}>
                    <TouchableOpacity>
                        <View style={style.searchIcon}>
                            <Icon name='search-web' color='black' size={30} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={style.cartIcon}>
                            <Icon name='cart' color='black' size={30} />
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
            {/* ---------------------Main Page View------------- */}
            <ScrollView>
                <Image style={{ width: '100%', resizeMode: 'contain', marginTop: -55 }} source={require('../../assets/cover.png')} />

                {/* ------Explore Collection Btn---- */}
                <TouchableOpacity>
                    <View style={style.h1}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>EXPLORE COLLECTION</Text>
                    </View>
                </TouchableOpacity>

                {/* ------------New Arrival Cards--------- */}


                <View>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 24, marginTop: 20 }}>NEW ARRIVAL</Text>
                    <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, width: "40%", alignSelf: 'center', margin: 10 }}></View>
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

                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, width: '70%', alignSelf: 'center', margin: 20 }}></View>

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

                {/* ------Collections---------- */}

                <View>
                    <Text style={{ color: 'black', fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginTop: 80 }}>COLLECTIONS</Text>
                </View>

                <View>
                    <Image style={{ resizeMode: 'contain', width: "100%" }} source={require('../../assets/collection.png')} />
                </View>

                <View >
                    <Image style={{ resizeMode: 'contain', width: '80%', height: 400, alignSelf: 'center' }} source={require('../../assets/collection-one.png')} />
                </View>
                {/* ----------------Video--------------- */}
                <View>
                    <VideoPlayer
                        video={require('../../assets/video.mp4')}
                        // videoWidth={1600}
                        videoHeight={600}
                        thumbnail={require('../../assets/thumnail.png')}
                        autoplay
                    />
                </View>

                {/* ----------Just For You-------- */}
                <View>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 24, marginTop: 40 }}>JUST FOR YOU</Text>
                    <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, width: "40%", alignSelf: 'center', margin: 10 }}></View>
                </View>

                {/* -----------scroll horizontal cards-------------- */}
                <View style={{ flexDirection: 'row' }} horizontal={true}>

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
                                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 18, marginTop: -20 }}>{item.detail}</Text>
                                    <Text style={{ color: "orange", fontSize: 24, textAlign: 'center' }}>{item.price}</Text>
                                </View>
                            )
                        }} />

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',margin:10 }}>
                    {cardData.map((item, index) => {
                        return (
                            <View style={{
                                width: currentIndex == index ? 20 : 8,
                                height: 8,
                                marginLeft: 3,
                                
                                borderRadius: 4,
                                backgroundColor: currentIndex == index ? "orange" : null,
                                borderColor: currentIndex == index ? "orange" : 'black',
                                borderWidth: .5
                            }}></View>
                        )
                    })
                    }
                </View>



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

                <View style={{ backgroundColor: '#E9E9E9', marginTop: 20, padding: 10 }}>
                    <View>
                        <Image style={{ resizeMode: 'contain', width: '50%', alignSelf: 'center' }} source={require('../../assets/logo.png')} />
                        <Text style={{ color: 'black', textAlign: 'center', fontSize: 18, padding: 15 }}>Making a luxurious lifestyle accessible
                            for a generous group of women is our
                            daily drive.</Text>
                        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, width: "60%", alignSelf: 'center', margin: 10 }}></View>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                        <View style={{ flexDirection: 'column', padding: 15, alignSelf: 'center' }}>
                            <Image style={style.iconscard} source={require('../../assets/iconOne.png')} />
                            <View style={{ width: 100, margin: 10 }}>

                                <Text style={{ color: 'black', fontSize: 16 }}>Fast shipping. Free on orders over $25.</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', padding: 15, alignSelf: 'center' }}>
                            <Image style={style.iconscard} source={require('../../assets/iconTwo.png')} />
                            <View style={{ width: 100, margin: 10 }}>

                                <Text style={{ color: 'black', fontSize: 16 }}>Fast shipping. Free on orders over $25.</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                        <View style={{ flexDirection: 'column', padding: 15, alignSelf: 'center' }}>
                            <Image style={style.iconscard} source={require('../../assets/iconeThree.png')} />
                            <View style={{ width: 100, margin: 10 }}>

                                <Text style={{ color: 'black', fontSize: 16 }}>Fast shipping. Free on orders over $25.</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', padding: 15, alignSelf: 'center' }}>
                            <Image style={style.iconscard} source={require('../../assets/iconFour.png')} />
                            <View style={{ width: 100, margin: 10 }}>

                                <Text style={{ color: 'black', fontSize: 16 }}>Fast shipping. Free on orders over $25.</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Image source={require('../../assets/iconFive.png')} />

                    </View>



                </View>

                {/* ---------------Social Media------------- */}
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 28, marginTop: 20, letterSpacing: 10 }}>FOLLOW US</Text>

                <Icon style={{ alignSelf: 'center', margin: 10 }} name='instagram' color='black' size={40} />

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', width: 150, height: 150, margin: 10 }} source={require('../../assets/social.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', width: 150, height: 150, margin: 10 }} source={require('../../assets/social.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', width: 150, height: 150, margin: 10 }} source={require('../../assets/social.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ resizeMode: 'contain', width: 150, height: 150, margin: 10 }} source={require('../../assets/social.png')} />
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', margin: 15 }}>
                    <Icon name='twitter' color='black' size={40} />
                    <Icon name='instagram' color='black' size={40} />
                    <Icon name='youtube' color='black' size={40} />


                </View>
                {/* ----------------Bottom---------------- */}
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', width: '50%', alignSelf: 'center', margin: 10 }}></View>
                <View style={{ alignSelf: 'center', margin: 10 }}>
                    <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>support@openui.design</Text>
                    <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>+60 825 876</Text>
                    <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>08:00 - 22:00 - Everyday</Text>
                </View>

                <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', width: '50%', alignSelf: 'center', margin: 10 }}></View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: 10, margin: 10 }}>
                    <TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("blogs")}>
                        <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>Blog</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 15, backgroundColor: '#F2F3F4', marginTop: 15, marginBottom: 10 }}>
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

const style = StyleSheet.create({
    // ------------Top navbar-----------
    TopNavbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: '#E9E9E9',



    },
    SearchAndCard: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    searchIcon: {
        marginRight: 2
    },

    logoImage: {
        resizeMode: 'contain',
        width: 100,
        height: 50
    },
    // ---------------Top navbar----------
    h1: {
        backgroundColor: 'black',
        borderRadius: 50,
        padding: 15,
        width: '60%',
        alignSelf: 'center',
        marginTop: -110,
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
        backgroundColor: "#E9E9E9"
    },

    // ------------scrollCard-------
    scrollCard: {
        width:width ,
        justifyContent: 'center',
        alignSelf: 'center',
       
    },
    iconscard: {
        resizeMode: 'contain',
        width: '90%'
    }
});



export default Home;