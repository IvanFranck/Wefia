import React, { useEffect, useState } from "react";
import { Pressable, TextInput, Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";
import SearchIcon from "./SVG/Search";
import { Colors, Typography } from "../Style";


export default function SearchBar({navigation}) {

    //handle search input
    const [searchText, setSearchText] = useState("")


    return (
        <Pressable style={styles.searchBar} onPress={()=>navigation.navigate("Search")}>
            {/* <TextInput
                placeholder="trouver le en quelques mots"
                selectionColor={Colors.bgColor}
                keyboardType="default"
                onChangeText={text => setSearchText(text)}
                defaultValue={searchText}
                style={styles.searchInput}
                onPressOut={()=>navigation.navigate("Search")}
            /> */}
            <Pressable onPress={()=>navigation.navigate("Search")} style={styles.searchInput}>
                <Text style={[Typography.detail]} >trouvez le en quelques mots</Text>
            </Pressable>
            <View  style={styles.searchBtn}>
                <SearchIcon width={20} height={20} color={Colors.white} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        flexGrow: 1.8,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 40,
        marginBottom: 32
    },
    searchBtn: {
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderRadius: 10,
        backgroundColor: Colors.primary,
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
        paddingLeft: 8,
        flexGrow: 0.9,
        paddingVertical: 8
    }
})