import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Dimensions, ActivityIndicator, FlatList, TextInput, Pressable } from 'react-native';
import _ from 'lodash';

import { Colors } from "../../Style";
import SearchIcon from '../../components/SVG/Search';
import { Request } from "../../components/Request";
import ServiceProviderCardSimplified from "../../components/ServiceProviderCardSimplified";



const Search = ({navigation}) => {

    const [data, setData] = useState(null);
    const [fulldata, setFullData] = useState(null);
    const [loading, load] = useState(false);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        (async () => {
            load(true);
            await Request.get("/serviceProvider")
                .then(resp => {
                    setData(resp.data);
                    setFullData(resp.data)
                    load(false);
                })
                .catch(err => console.error(err))
        })();
    },[])

    const handleSearchInputChange = (text) => {

        const formatQuery = searchText.toLowerCase();
        const data = _.filter(fulldata, item=> {
            if (item.service.toLowerCase().includes(formatQuery)) {
                return true;
            }
            return false;
        })
        setData(data);
        setSearchText(text)
    }


    if (!loading) return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                translucent={true}
                barStyle="dark-content"
                backgroundColor={Colors.bgColor}
            />
            <View style={styles.header}>
                <View style={styles.searchBar}>
                    <SearchIcon width={20} height={20} color={Colors.primary} />
                    <TextInput
                        placeholder="Rechercher un service"
                        selectionColor={Colors.bgColor}
                        keyboardType="default"
                        onChangeText={handleSearchInputChange}
                        defaultValue={searchText}
                        style={styles.searchInput}
                    />

                </View>
            </View>
            <View style={styles.body}>
                <FlatList 
                    data={data}
                    renderItem = { (data) => {return (<ServiceProviderCardSimplified navigation={navigation} data={data} /> )}}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>
    )
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator color={Colors.primary} size="large" />
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height + 200,
        backgroundColor: Colors.bgColor,
        marginTop: StatusBar.currentHeight,
        paddingTop: 15,

    },
    header: {
        width: "100%",
        flexDirection: "column",
        height: 50,
        borderBottomColor: Colors.gray,
        paddingHorizontal: 20,
        borderBottomWidth: 2,
        paddingBottom: 8
    },
    body: {
        marginTop: 16,
        width: "100%",
        flex: 1,
        paddingHorizontal: 20,
        alignItems: "flex-start",
    },
    searchBar: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.gray,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20
    },
    searchBtn: {
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderRadius: 10,
        backgroundColor: Colors.primary,
        height: 30,
        flexGrow: 0.4,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    searchInput: {
        fontSize: 14,
        color: "#141414",
        letterSpacing: 0.2,
        fontFamily: "Montserrat_Regular",
        flexGrow: 0.9,
        height: 30
    }
})

export default Search;

