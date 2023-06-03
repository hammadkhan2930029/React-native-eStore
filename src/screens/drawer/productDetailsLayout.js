import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';


const ProductDetailsLayout = () => {
    const navigation = useNavigation();

    return (
        // ---------------Top Navbar-----------------
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
                    <TouchableOpacity onPress={() => navigation.navigate('placeOrder')}>
                        <View style={style.cartIcon}>
                            <Image source={require('../../NewAssets/shoppingBag.png')} />

                        </View>
                    </TouchableOpacity>

                </View>

            </View>
            {/* ---------------card Details------------- */}
            <ScrollView>
                <View style={{ width: width - 10, alignSelf: 'center' }}>
                    <View>
                        <Image style={{ width: width - 10, alignSelf: 'center' }} source={require('../../NewAssets/apperal/mainImage.png')} />

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../NewAssets/apperal/one.png')} />
                        <Image source={require('../../NewAssets/apperal/two.png')} />
                        <Image source={require('../../NewAssets/apperal/three.png')} />
                        <Image source={require('../../NewAssets/apperal/four.png')} />

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                        <Text style={{ color: 'black', fontSize: 22, letterSpacing: 5 }}>MOHAN</Text>
                        <TouchableOpacity>
                            <Image source={require('../../NewAssets/apperal/Export.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: 'black', fontSize: 16 }}>Export Recycle Bouncle Snite Carlie</Text>
                        <Text style={{ color: '#DD8560', fontSize: 20 }}> $120</Text>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#555555', fontSize: 16 }}>Ring Size :</Text>
                            <Text style={{ color: 'black', borderColor: '#F2F3F4', borderWidth: 2, borderRadius: 50, padding: 5, width: 30, height: 30, textAlign: "center", margin: 5 }}>6</Text>
                            <Text style={{ color: 'black', borderColor: '#F2F3F4', borderWidth: 2, borderRadius: 50, padding: 5, width: 30, height: 30, textAlign: "center", margin: 5 }}>8</Text>
                            <Text style={{ color: 'black', borderColor: '#F2F3F4', borderWidth: 2, borderRadius: 50, padding: 5, width: 30, height: 30, textAlign: "center", margin: 5 }}>10</Text>
                            <Text style={{ color: 'black', borderColor: '#F2F3F4', borderWidth: 2, borderRadius: 50, padding: 5, width: 30, height: 30, textAlign: "center", margin: 5 }}>11</Text>
                            <Text style={{ color: 'black', borderColor: '#F2F3F4', borderWidth: 2, borderRadius: 50, padding: 5, width: 30, height: 30, textAlign: "center", margin: 5 }}>12</Text>


                        </View>
                    </View>
                </View>
                {/* -----------btn------------- */}
                <TouchableOpacity>
                    <View style={{ width: width , backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../NewAssets/apperal/Plus.png')} />
                            <Text style={{ color: 'white', marginLeft: 5 }}>ADD TO BASKET</Text>
                        </View>
                        <View>
                            <Image source={require('../../NewAssets/apperal/Heart2.png')} />

                        </View>
                    </View>
                </TouchableOpacity>
                {/* --------------------details------------------ */}
                <View style={{ width: width - 20, margin: 10 }}>
                    <Text style={{ color: 'black', fontSize: 22, marginTop: 10 }}>GALLERY</Text>
                    <View style={{ alignSelf: 'center' }}>
                        <Image style={{ marginTop: 10 }} source={require('../../NewAssets/apperal/image16.png')} />
                        <Image style={{ marginTop: 10 }} source={require('../../NewAssets/apperal/image17.png')} />
                        <Image style={{ marginTop: 10 }} source={require('../../NewAssets/apperal/image18.png')} />

                    </View>

                    {/* ----------------- */}
                    <Text style={{ color: 'black', fontSize: 20, marginTop: 15 }}>CARE</Text>
                    <TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Image source={require('../../NewAssets/apperal/Shipping.png')} />
                                <Text style={{ color: '#555555', fontSize: 16, marginLeft: 5 }}>Free Flat Rate Shipping</Text>
                            </View>

                            <View>
                                <Image source={require('../../NewAssets/apperal/ForwardDown.png')} />
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Image source={require('../../NewAssets/apperal/Tag.png')} />
                                <Text style={{ color: '#555555', fontSize: 16, marginLeft: 5 }}>Free Flat Rate Shipping</Text>
                            </View>
                            <View>
                                <Image source={require('../../NewAssets/apperal/ForwardDown.png')} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Image source={require('../../NewAssets/apperal/Refresh.png')} />
                                <Text style={{ color: '#555555', fontSize: 16, marginLeft: 5 }}>Free Flat Rate Shipping</Text>

                            </View>
                            <View>
                                <Image source={require('../../NewAssets/apperal/ForwardDown.png')} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* ----------cards-------------- */}
                <View>
                    <View style={{ margin: 15 }}>
                        <Text style={{ color: 'black', fontSize: 24, textAlign: 'center' }} >YOU MAY ALSO LIKE</Text>
                        <Image style={{ alignSelf: 'center', margin: 10 }} source={require('../../NewAssets/line.png')} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-around', width: width - 5, height: height / 2 }}>

                    <View style={{ width: width - 190 }}>
                        <View>
                            <Image style={{ resizeMode: 'contain', width: width - 190 }} source={require('../../NewAssets/apperal/ring1.png')} />
                        </View>

                        <View style={{ marginLeft: '80%', marginTop: 190, position: 'absolute' }}>
                            <TouchableOpacity>
                                <Image source={require('../../NewAssets/apperal/Heart.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ color: '#555555', fontSize: 18 }}>21Wi</Text>
                            <Text style={{ color: '#555555', fontSize: 14 }} >Reversable Androna Cardio</Text>
                            <Text style={{ color: '#DD8560', fontSize: 20, fontWeight: 'bold' }}>$ 213</Text>

                        </View>
                    </View>
                    <View style={{ width: width - 190 }}>
                        <View>
                            <Image style={{ resizeMode: 'contain', width: width - 190 }} source={require('../../NewAssets/apperal/ring2.png')} />
                        </View>

                        <View style={{ marginLeft: '80%', marginTop: 190, position: 'absolute' }}>
                            <TouchableOpacity>
                                <Image source={require('../../NewAssets/apperal/Heart.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ color: '#555555', fontSize: 18 }}>21Wi</Text>
                            <Text style={{ color: '#555555', fontSize: 14 }} >Reversable Androna Cardio</Text>
                            <Text style={{ color: '#DD8560', fontSize: 20, fontWeight: 'bold' }}>$ 213</Text>

                        </View>
                    </View>
                </View>
                {/* --------------- */}
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-around', width: width - 5, height: height / 3 }}>

                    <View style={{ width: width - 190 }}>
                        <View>
                            <Image style={{ resizeMode: 'contain', width: width - 190 }} source={require('../../NewAssets/apperal/ring3.png')} />
                        </View>

                        <View style={{ marginLeft: '80%', marginTop: 190, position: 'absolute' }}>
                            <TouchableOpacity>
                                <Image source={require('../../NewAssets/apperal/Heart.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ color: '#555555', fontSize: 18 }}>21Wi</Text>
                            <Text style={{ color: '#555555', fontSize: 14 }} >Reversable Androna Cardio</Text>
                            <Text style={{ color: '#DD8560', fontSize: 20, fontWeight: 'bold' }}>$ 213</Text>

                        </View>
                    </View>
                    <View style={{ width: width - 190 }}>
                        <View>
                            <Image style={{ resizeMode: 'contain', width: width - 190 }} source={require('../../NewAssets/apperal/ring4.png')} />
                        </View>

                        <View style={{ marginLeft: '80%', marginTop: 190, position: 'absolute' }}>
                            <TouchableOpacity>
                                <Image source={require('../../NewAssets/apperal/Heart.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ color: '#555555', fontSize: 18 }}>21Wi</Text>
                            <Text style={{ color: '#555555', fontSize: 14 }} >Reversable Androna Cardio</Text>
                            <Text style={{ color: '#DD8560', fontSize: 20, fontWeight: 'bold' }}>$ 213</Text>

                        </View>
                    </View>
                </View>








                {/* ------------Bottom---------------- */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 50 }}>
                    <Icon name='twitter' color='black' size={30} />
                    <Icon name='instagram' color='black' size={30} />
                    <Icon name='youtube' color='black' size={30} />
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


        </SafeAreaView >
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
});

export default ProductDetailsLayout;