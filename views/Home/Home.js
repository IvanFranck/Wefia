import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View, Text, Image, StatusBar, Pressable, Alert, FlatList } from "react-native";
import { Colors, Typography } from "../../Style";
import * as Font from "expo-font";
import Notification from '../../components/Notification';
import SearchBar from '../../components/SearchBar';
import ServiceProviderCard from '../../components/ServiceProviderCard';


export default function Home() {

    //handle fonts loading
    const [fontLoaded, laodFonts] = useState(false)

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                Montserrat_Bold: require("../../assets/fonts/MontserratBold.ttf"),
                Montserrat_Regular: require("../../assets/fonts/MontserratRegular.ttf")
            });
            laodFonts(true);
        })()
    })


    if (!fontLoaded) {
        return null;
    } else {
        return (
            <View style={styles.container} >
                <StatusBar
                    hidden={false}
                    translucent={true}
                    barStyle="dark-content"
                    backgroundColor={Colors.bgColor}
                />

                {/* header */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Pressable style={styles.profilPicture}>
                            <Image style={styles.userImg} source={require("../../assets/favicon.png")} />
                        </Pressable>
                        <Text>Salut, John</Text>
                    </View>
                    <Notification action={() => Alert.alert("Notifications")} />
                </View>

                {/* title */}

                <Text style={[Typography.title, { fontFamily: "Montserrat_Bold" }]} >Quel service recherchez-vous ?</Text>


                {/* Search bar */}

                <SearchBar />

                {/* service provider profils */}

                <Text style={[Typography.default, { fontFamily: "Montserrat_Regular", marginBottom: 8 }]}>Les plus populaires</Text>

                <ServiceProviderCard />



            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {

        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: Colors.bgColor,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
        paddingTop: 46
    },
    header: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        flexGrow: 0.1,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    headerLeft: {
        flex: 1,
        flexDirection: "row",
        flexGrow: 0.3,
        alignItems: "center"
    },
    userImg: {
        resizeMode: "stretch",
        width: 36,
        height: 36,
        borderRadius: 200,
        marginRight: 8
    }
})