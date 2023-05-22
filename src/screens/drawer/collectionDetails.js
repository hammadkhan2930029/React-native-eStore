import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';



const CollectionDetails = () => {
    const navigation = useNavigation();
    const blackTheemCards = [
        { id: 1, cardImage: require('../../NewAssets/blackTheem/image2.png'), details: "BLACk COLLECTION" },
        { id: 2, cardImage: require('../../NewAssets/blackTheem/image3.png'), details: "BLACk COLLECTION" },
        { id: 3, cardImage: require('../../NewAssets/blackTheem/image4.png'), details: "BLACk COLLECTION" },
        { id: 4, cardImage: require('../../NewAssets/blackTheem/image2.png'), details: "BLACk COLLECTION" },


    ]

    const [isClick, setIsClick] = useState(false)
    return (
        // ---------------Top Navbar-----------------
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
            <View style={style.TopNavbar}>
                <TouchableOpacity onPress={() => {navigation.openDrawer()}}>
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

                    </View>
                    {/* ----------------cards------------------- */}
                   
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-around', width: width - 15,margin:10 }}>

                            <View style={{ width: width - 190 }}>
                                <View>
                                    <Image style={{ resizeMode: 'contain', width: width - 190 }} source={require('../../NewAssets/blackTheem/image1.png')} />
                                </View>

                                <View style={{ marginLeft: '80%', marginTop: 190, position: 'absolute' }}>
                                    <TouchableOpacity>
                                        <Image source={require('../../NewAssets/apperal/Heart.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{ color: 'white', fontSize: 18 }}>21Wi</Text>
                                    <Text style={{ color: 'white', fontSize: 14 }} >Reversable Androna Cardio</Text>
                                    <Text style={{ color: '#DD8560', fontSize: 20, fontWeight: 'bold' }}>$ 213</Text>

                                </View>
                            </View>
                            <View style={{ width: width - 190 }}>
                                <View>
                                    <Image style={{ resizeMode: 'contain', width: width - 190 }} source={require('../../NewAssets/blackTheem/ring.png')} />
                                </View>

                                <View style={{ marginLeft: '80%', marginTop: 190, position: 'absolute' }}>
                                    <TouchableOpacity>
                                        <Image source={require('../../NewAssets/apperal/Heart.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{ color: 'white', fontSize: 18 }}>21Wi</Text>
                                    <Text style={{ color: 'white', fontSize: 14 }} >Reversable Androna Cardio</Text>
                                    <Text style={{ color: '#DD8560', fontSize: 20, fontWeight: 'bold' }}>$ 213</Text>

                                </View>
                            </View>


                        </View>

                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-around', width: width - 15 }}>

                            <View style={{ width: width - 190 }}>
                                <View>
                                    <Image style={{ resizeMode: 'contain', width: width - 190 }} source={require('../../NewAssets/blackTheem/ring2.png')} />
                                </View>

                                <View style={{ marginLeft: '80%', marginTop: 190, position: 'absolute' }}>
                                    <TouchableOpacity>
                                        <Image source={require('../../NewAssets/apperal/Heart.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{ color: 'white', fontSize: 18 }}>21Wi</Text>
                                    <Text style={{ color: 'white', fontSize: 14 }} >Reversable Androna Cardio</Text>
                                    <Text style={{ color: '#DD8560', fontSize: 20, fontWeight: 'bold' }}>$ 213</Text>

                                </View>
                            </View>
                            <View style={{ width: width - 190 }}>
                                <View>
                                    <Image style={{ resizeMode: 'contain', width: width - 190 }} source={require('../../NewAssets/blackTheem/shoes.png')} />
                                </View>

                                <View style={{ marginLeft: '80%', marginTop: 190, position: 'absolute' }}>
                                    <TouchableOpacity>
                                        <Image source={require('../../NewAssets/apperal/Heart.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{ color: 'white', fontSize: 18 }}>21Wi</Text>
                                    <Text style={{ color: '#white', fontSize: 14 }} >Reversable Androna Cardio</Text>
                                    <Text style={{ color: '#DD8560', fontSize: 20, fontWeight: 'bold' }}>$ 213</Text>

                                </View>
                            </View>


                        </View>

                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-around', width: width - 15 }}>

                            <View style={{ width: width - 190 }}>
                                <View>
                                    <Image style={{ resizeMode: 'contain', width: width - 190 }} source={require('../../NewAssets/blackTheem/image1.png')} />
                                </View>

                                <View style={{ marginLeft: '80%', marginTop: 190, position: 'absolute' }}>
                                    <TouchableOpacity>
                                        <Image source={require('../../NewAssets/apperal/Heart.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{ color: 'white', fontSize: 18 }}>21Wi</Text>
                                    <Text style={{ color: 'white', fontSize: 14 }} >Reversable Androna Cardio</Text>
                                    <Text style={{ color: '#DD8560', fontSize: 20, fontWeight: 'bold' }}>$ 213</Text>

                                </View>
                            </View>
                            <View style={{ width: width - 190 }}>
                                <View>
                                    <Image style={{ resizeMode: 'contain', width: width - 190 }} source={require('../../NewAssets/blackTheem/ring.png')} />
                                </View>

                                <View style={{ marginLeft: '80%', marginTop: 190, position: 'absolute' }}>
                                    <TouchableOpacity>
                                        <Image source={require('../../NewAssets/apperal/Heart.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{ color: 'white', fontSize: 18 }}>21Wi</Text>
                                    <Text style={{ color: 'white', fontSize: 14 }} >Reversable Androna Cardio</Text>
                                    <Text style={{ color: '#DD8560', fontSize: 20, fontWeight: 'bold' }}>$ 213</Text>

                                </View>
                            </View>

                        </View>

                    </View>


                </View>
                <View style={{ backgroundColor: 'black', padding: 10 }}>
                    <Text style={{ color: 'white', fontSize: 24, textAlign: 'center', letterSpacing: 4 }}>YOU MAY ALSO LIKE</Text>
                    <Image style={{ alignSelf: 'center', margin: 20, resizeMode: 'contain' }} source={require('../../NewAssets/blackTheem/Line.png')} />
                </View>
                <ScrollView horizontal>
                    <View style={{ flexDirection: 'row', backgroundColor: 'black', padding: 10 }}>
                        {blackTheemCards.map((item, index) => {
                            return (
                                <View key={index} style={{ width: width - 60, height: 450, margin: 5 }}>
                                    <Image style={{ resizeMode: 'contain', width: width - 70, margin: 10 }} source={item.cardImage} />
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>



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

export default CollectionDetails;