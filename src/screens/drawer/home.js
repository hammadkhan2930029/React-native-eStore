import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, ImageBackground, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
const { width, height } = Dimensions.get("window")


const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            {/* ----------Top NavBar----------- */}
            <View style={style.TopNavbar}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={style.drawerBtnView}>
                        <Icon name='menu' color='black' size={30} />
                    </View>
                </TouchableOpacity>

                <View style={style.Logo}><Image style={style.logoImage} source={require('../../assets/logo.png')} /></View>

                <View style={style.SearchAndCard}>
                    <TouchableOpacity>
                        <View style={style.searchIcon}>
                            <Icon name='search' color='black' size={30} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={style.cartIcon}>
                            <Icon name='shopping-cart' color='black' size={30} />
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
            {/* ---------------------Main Page View------------- */}
            <ScrollView >
                <Image style={{ width: width, resizeMode: 'contain', marginTop: -55 }} source={require('../../assets/cover.png')} />

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
                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>21WN reversible angora cardigan $120</Text>
                    </View>
                    <View style={style.card}>
                        <Image style={style.cardImage} source={require('../../assets/card.png')} />
                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>21WN reversible angora cardigan $120</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <View style={style.card}>
                        <Image style={style.cardImage} source={require('../../assets/card.png')} />
                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>21WN reversible angora cardigan $120</Text>
                    </View>
                    <View style={style.card}>
                        <Image style={style.cardImage} source={require('../../assets/card.png')} />
                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>21WN reversible angora cardigan $120</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <View style={style.card}>
                        <Image style={style.cardImage} source={require('../../assets/card.png')} />
                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>21WN reversible angora cardigan $120</Text>
                    </View>
                    <View style={style.card}>
                        <Image style={style.cardImage} source={require('../../assets/card.png')} />
                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>21WN reversible angora cardigan $120</Text>
                    </View>
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

    }
});



export default Home;