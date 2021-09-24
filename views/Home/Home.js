import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View, Text, Image, StatusBar, Pressable, Alert, ScrollView, FlatList, ActivityIndicator } from "react-native";
import { Colors, Typography } from "../../Style";
import * as Font from "expo-font";
import Notification from '../../components/Notification';
import SearchBar from '../../components/SearchBar';
import ServiceProviderCard from '../../components/ServiceProviderCard';
import {Request} from "../../components/Request";
import DeviceStorage from '../../services/DeviceStorage';


export default function Home({navigation, route}) {

    // get userId and token from HomesatckNavigator
    

    const [servicesProviders, setSP] = useState([])
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {

            await Request.get(`/user/${route.params.userId}`)
                        .then(resp => setUser(resp.data.user))
                        .catch(err => console.error(err))
           
            await Request.get("/serviceProvider")
                .then(resp => {
                    setSP(resp.data);
                })
                .catch(err => console.error(err))
        })();

    }, [])

    


    if (servicesProviders && user) {
        
        return (
            <ScrollView
                style={styles.view}
            >
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
                            <Pressable style={styles.profilPicture} onPress={()=>navigation.navigate("ProfilStackNavigator")}>
                                <Image style={styles.userImg} source={{uri: user.profilePicture}} />
                            </Pressable>
                            <Text>{`Salut ${user.firstName}`}</Text>
                        </View>
                        <Notification action={() => Alert.alert("Notifications")} />
                    </View>

                    {/* title */}

                    <Text style={[Typography.title, { fontFamily: "Montserrat_Bold" }]} >Quel service recherchez-vous ?</Text>


                    {/* Search bar */}

                    <SearchBar navigation={navigation} />

                    {/* service provider profils */}

                    <Text style={[Typography.default, { fontFamily: "Montserrat_Bold", marginBottom: 32, fontSize: 18 }]}>Les plus populaires</Text>

                    {servicesProviders.map(serviceProvider => {
                        return (
                            <ServiceProviderCard navigation={navigation} data={{serviceProvider: serviceProvider}} key={serviceProvider._id} />
                        )
                    })}


                </View>
            </ScrollView>
        )
    } else {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator color={Colors.primary} size = "large" />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    view: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height, 
        backgroundColor: Colors.bgColor, 
    },
    container: {
        width: "100%",
        height: "100%",
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
        paddingTop: 70,
        paddingBottom: 60
    },
    header: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        flexGrow: 0.1,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        marginTop: 4,
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