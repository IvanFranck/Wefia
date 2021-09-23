import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Search from '../views/Search/Search';
import HomeStackNavigator from "./HomeStackNavigator";
import ProfilStackNavigator from '../navigation/ProfilStackNavigator';
import DemandStackNavigator from '../navigation/DemandStackNavigator';
import * as Font from "expo-font";
import { Colors } from '../Style';
import { Text, View, StyleSheet } from "react-native";
import HomeSVG from '../components/SVG/Home';
import ShoppingCard from "../components/SVG/ShoppingCard";
import SearchSVG from "../components/SVG/Search";
import ProfilSVG from "../components/SVG/Profil";



const Tab = createMaterialTopTabNavigator();

const Tabs = ({ route }) => {

    // get userId and token from log in view and pass them to children screens

    const [fontLoaded, loadFonts] = useState(false);

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                Montserrat_Bold: require("../assets/fonts/MontserratBold.ttf"),
                Montserrat_Regular: require("../assets/fonts/MontserratRegular.ttf")
            });
            loadFonts(true);
        })();
    }, [fontLoaded])

    if (fontLoaded) {
        return (
            <Tab.Navigator
                tabBarPosition="bottom"
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        width: "100%",
                        bottom: 0,
                        height: 55,
                        backgroundColor: Colors.primary
                    },
                    tabBarHideOnKeyboard: true,
                    tabBarIndicator: ()=>{return null}

                }}
            >

                {/* Home */}
                <Tab.Screen
                    name="HomeStackNavigator"
                    component={HomeStackNavigator}
                    initialParams={{
                        userId: route.params.userId
                    }}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={[style.tabBarIcon]}>
                                <HomeSVG width={20} height={20} color={focused ? Colors.white : Colors.secondary} />

                                
                            </View>
                        )
                    }}
                />

                {/* Search */}
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={style.tabBarIcon}>
                                <SearchSVG width={20} height={20} color={focused ? Colors.white : Colors.secondary} />

                                
                            </View>
                        )
                    }}
                />

                {/* demand */}
                <Tab.Screen
                    name="DemandStackNavigator"
                    component={DemandStackNavigator}
                    initialParams={{
                        userId: route.params.userId
                    }}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={style.tabBarIcon}>
                                <ShoppingCard width={20} height={20} color={focused ? Colors.white : Colors.secondary} />

                               
                            </View>
                        )
                    }}
                />

                {/* profil */}
                <Tab.Screen
                    name="ProfilStackNavigator"
                    component={ProfilStackNavigator}
                    initialParams={{
                        userId: route.params.userId
                    }}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={style.tabBarIcon}>
                                <ProfilSVG width={20} height={20} color={focused ? Colors.white : Colors.secondary} />

                               
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        )
    } else {
        return null;
    }
}

const style = StyleSheet.create({
    text: {
        fontFamily: "Montserrat_Regular",
        fontSize: 10,
        marginTop: 4
    },
    tabBarIcon: {
        flex: 1,
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    indicator: {
        height: 13,
        backgroundColor: Colors.white
    }
})

export default Tabs;