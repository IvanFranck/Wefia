import React, { useEffect, useState } from "react";
import { Pressable, TextInput, StyleSheet } from "react-native";
import * as Font from "expo-font";
import Search from "./SVG/Search";
import { Colors } from "../Style";


export default function SearchBar() {

    //handle search input
    const [searchText, setSearchText] = useState("")


    return (
        <Pressable style={styles.searchBar}>
            <TextInput
                placeholder="trouver le en quelques mots"
                selectionColor={Colors.bgColor}
                keyboardType="default"
                onChangeText={text => setSearchText(text)}
                defaultValue={searchText}
                style={styles.searchInput}
            />
            <Pressable style={styles.searchBtn}>
                <Search width={20} height={20} color={Colors.white} />
            </Pressable>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        flexGrow: 0.08,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 16,
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
    }
})