import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../views/Home/Home';
import ServciceProviderProfil from "../views/Home/ServciceProviderProfil";

export default function HomeStackNavigator({ route }) {

    // get userId and token from Tab and pass them to children screens


    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="home" component={Home} initialParams={{
                userId: route.params.userId
            }} />

            <Stack.Screen name="ContactSP" component={ServciceProviderProfil}  initialParams={{
                token: route.params.token,
                userId: route.params.userId
            }}/>
        </Stack.Navigator>
    )

}
