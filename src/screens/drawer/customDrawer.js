import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'





const CustomDrawer = (props) => {
    // -----------Woman------------
    const [womanDropdwon, setWomanDropdown] = useState(false);
    const [openNew, setOpenNew] = useState(false);
    const [openAperal, setOpenAperal] = useState(false);
    const [openBags, setOpenBags] = useState(false);
    const [openShoes, setOpenShoes] = useState(false);
    const [openAccessories, setOpenAccessories] = useState(false);

    const ApparelDropDownData = [
        { id: 1, productName: 'Outer' },
        { id: 2, productName: 'Shirt' },
        { id: 3, productName: 'Blows/Shirt' },
        { id: 4, productName: 'T-Shirt' },
        { id: 5, productName: 'Dress' },
        { id: 6, productName: 'KnitWear' },
        { id: 7, productName: 'Skirt' },
        { id: 8, productName: 'Pants' },
        { id: 9, productName: 'Denum' },
    ]

    const [data, SetData] = useState(ApparelDropDownData)





    // -----------man-----------

    const [manDropdwon, setManDropdown] = useState(false);

    // -------------kids-------------
    const [kidsDropdwon, setKidsDropdown] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>

                <View style={style.main}>

                    {/* ------------woman---------------- */}

                    <TouchableOpacity onPress={() => setWomanDropdown(!womanDropdwon)}>
                        <View style={style.dropDown}>
                            <View>
                                <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Woman</Text>
                            </View>
                            <View>
                                {womanDropdwon ? <Icon style={style.arrow} name='keyboard-arrow-down' size={30} color='black' /> : <Icon style={style.arrow} name='keyboard-arrow-right' size={30} color='black' />}
                            </View>
                        </View>
                    </TouchableOpacity>
                    {womanDropdwon ? (<View style={style.dropDownWoman}>
                        {/* ------------New----------- */}
                        <TouchableOpacity onPress={() => setOpenNew(!openNew)}>
                            <View style={style.one}>
                                <Text style={{ color: '#6B695E', fontSize: 20 }}>New</Text>
                                {openNew ? <Icon name='keyboard-arrow-up' size={30} color='#6B695E' /> : <Icon name="keyboard-arrow-down" size={30} color="#6B695E" />}
                            </View>
                        </TouchableOpacity>
                        {openNew ? (
                            <View>
                                <FlatList data={data} renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity>
                                            <Text style={{ color: 'black', padding: 10, fontSize: 16, margin: 3, borderBottomColor: '#6B695E', borderBottomWidth: .7, borderRadius: 10 }}>{item.productName}</Text>
                                        </TouchableOpacity>
                                    )
                                }} />
                            </View>
                        ) : null}


                        {/* -------------Apperal------------- */}
                        <TouchableOpacity onPress={() => setOpenAperal(!openAperal)}>
                            <View style={style.one}>
                                <Text style={{ color: '#6B695E', fontSize: 20 }}>Apparel</Text>
                                {openAperal ? <Icon name='keyboard-arrow-up' size={30} color='#6B695E' /> : <Icon name="keyboard-arrow-down" size={30} color="#6B695E" />}

                            </View>
                        </TouchableOpacity>
                        {openAperal ? (
                            <View>
                                <FlatList data={data} renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity>
                                            <Text style={{ color: 'black', padding: 10, fontSize: 16, margin: 3, borderBottomColor: '#6B695E', borderBottomWidth: .7, borderRadius: 10 }}>{item.productName}</Text>
                                        </TouchableOpacity>
                                    )
                                }} />
                            </View>
                        ) : null}
                        {/* -------------Bags------------- */}
                        <TouchableOpacity onPress={() => setOpenBags(!openBags)}>
                            <View style={style.one}>
                                <Text style={{ color: '#6B695E', fontSize: 20 }}>Bags</Text>
                                {openBags ? <Icon name='keyboard-arrow-up' size={30} color='#6B695E' /> : <Icon name="keyboard-arrow-down" size={30} color="#6B695E" />}

                            </View>
                        </TouchableOpacity>
                        {openBags ? (
                            <View>
                                <FlatList data={data} renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity>
                                            <Text style={{ color: 'black', padding: 10, fontSize: 16, margin: 3, borderBottomColor: '#6B695E', borderBottomWidth: .7, borderRadius: 10 }}>{item.productName}</Text>
                                        </TouchableOpacity>
                                    )
                                }} />
                            </View>
                        ) : null}
                        {/* -------------Shoes------------- */}

                        <TouchableOpacity onPress={() => setOpenShoes(!openShoes)}>
                            <View style={style.one}>
                                <Text style={{ color: '#6B695E', fontSize: 20 }}>Shoes</Text>
                                {openShoes ? <Icon name='keyboard-arrow-up' size={30} color='#6B695E' /> : <Icon name="keyboard-arrow-down" size={30} color="#6B695E" />}

                            </View>
                        </TouchableOpacity>
                        {/* -------------Accessories------------- */}

                        <TouchableOpacity onPress={() => setOpenAccessories(!openAccessories)}>
                            <View style={style.one}>
                                <Text style={{ color: '#6B695E', fontSize: 20 }}>Accessories</Text>
                                {openAccessories ? <Icon name='keyboard-arrow-up' size={30} color='#6B695E' /> : <Icon name="keyboard-arrow-down" size={30} color="#6B695E" />}

                            </View>
                        </TouchableOpacity>


                    </View>) : null}

                    {/* ------------Man----------------- */}

                    <TouchableOpacity onPress={() => setManDropdown(!manDropdwon)}>
                        <View style={style.dropDown}>
                            <View>
                                <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Man</Text>
                            </View>
                            <View>
                                {manDropdwon ? <Icon style={style.arrow} name='keyboard-arrow-down' size={30} color='black' /> : <Icon style={style.arrow} name='keyboard-arrow-right' size={30} color='black' />}

                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* -----------Kids------------------ */}

                    <TouchableOpacity onPress={() => setKidsDropdown(!kidsDropdwon)}>
                        <View style={style.dropDown}>
                            <View>
                                <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>kids</Text>
                            </View>
                            <View>
                                {kidsDropdwon ? <Icon style={style.arrow} name='keyboard-arrow-down' size={30} color='black' /> : <Icon style={style.arrow} name='keyboard-arrow-right' size={30} color='black' />}
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
                    {/* -------------Contact And Social Link------------- */}


                <View style={{ marginTop: 380}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                    <Icon name="phone-enabled" size={30} color='black' />
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginLeft: 5 }}>0317-2930029</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                    <Icon name='location-on' size={30} color='black' />
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginLeft: 5 }}>Store Locator</Text>
                </View>

                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, width: '60%', alignSelf: 'center' }}></View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', margin: 15 }}>
                    <Icon name='facebook' color='black' size={30} />
                    <Icon name='facebook' color='black' size={30} />
                    <Icon name='facebook' color='black' size={30} />


                </View>
            </View>

            </ScrollView>
            


        </SafeAreaView>

    )
};

const style = StyleSheet.create({
    main: {
        flexDirection: 'column',
        padding: 10,

    },
    dropDown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 10,
    },
    // ------woman---------
    // dropDownWoman: {
    //     height: 200,

    // },
    // ----------one----------
    one: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    }

})



export default CustomDrawer;