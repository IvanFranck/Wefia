import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../views/Home/Home';
import { Text } from "react-native";
import ServciceProviderProfil from "../views/Home/ServciceProviderProfil";

export default function HomeStackNavigator () {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="home"  component={Home}/>
            <Stack.Screen name="ContactSP" component={ServciceProviderProfil} />
        </Stack.Navigator>
    )

}
