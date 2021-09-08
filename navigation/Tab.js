import React, {useEffect, useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from '../views/Search/Search';
import Home from '../views/Home/Home';
import Profil from '../views/Profil/Profil';
import Demand from '../views/Demand/Demand';
import * as Font from "expo-font";
import {Colors} from '../Style';
import { Image, Text, View, StyleSheet } from "react-native";
import HomeSVG from '../components/SVG/Home';
import ShoppingCard from "../components/SVG/ShoppingCard";
import SearchSVG from "../components/SVG/Search";
import ProfilSVG from "../components/SVG/Profil";



const Tab = createBottomTabNavigator();

const Tabs = () => {

    const [fontLoaded, loadFonts] = useState(false);

    useEffect(()=>{
        (async ()=> {
            await Font.loadAsync({
                Montserrat_Bold: require("../assets/fonts/MontserratBold.ttf"),
                Montserrat_Regular: require("../assets/fonts/MontserratRegular.ttf")
            });
            loadFonts(true);
        })();
    }, [fontLoaded])

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 25,
                    left: 20,
                    right: 20,
                    height: 55,
                    borderRadius: 10,
                    elevation: 0,
                    backgroundColor: Colors.primary
                },
                tabBarHideOnKeyboard: true
            }}
        >

            {/* Home */}
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={style.tabBarIcon}>
                            <HomeSVG width={20} height={20} color={focused ? Colors.white : Colors.secondary} />

                            {/* display text on focus */}
                            { focused && <Text 
                                style={[style.text, {color: Colors.white }]}
                            > Accueil</Text>}
                        </View>
                    )
                }}    
            />

            {/* Search */}
            <Tab.Screen 
                name="Search" 
                component={Search} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={style.tabBarIcon}>
                            <SearchSVG width={20} height={20} color={focused ? Colors.white : Colors.secondary} />

                            {/* display text on focus */}
                            { focused && <Text 
                                style={[style.text, {color: Colors.white }]}
                            > Rechercher </Text>}
                        </View>
                    )
                }} 
            />

            {/* demand */}
            <Tab.Screen 
                name="Profil" 
                component={Profil} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={style.tabBarIcon}>
                            <ShoppingCard width={20} height={20} color={focused ? Colors.white : Colors.secondary} />

                            {/* display text on focus */}
                            { focused && <Text 
                                style={[style.text, {color: Colors.white }]}
                            > Demandes</Text>}
                        </View>
                    )
                }}
            />

            {/* profil */}
            <Tab.Screen 
                name="Demand" 
                component={Demand} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={style.tabBarIcon}>
                            <ProfilSVG width={20} height={20} color={focused ? Colors.white : Colors.secondary} />

                            {/* display text on focus */}
                            { focused && <Text 
                                style={[style.text, {color: Colors.white }]}
                            > Profil </Text>}
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const style = StyleSheet.create({
    text: {
        fontFamily: "Montserrat_Regular",
        fontSize: 10,
        marginTop: 4
    },
    tabBarIcon: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Tabs;