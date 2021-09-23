import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profil from '../views/Profil/Profil';
import ServciceProviderProfil from "../views/Home/ServciceProviderProfil";

export default function ProfilStackNavigator({ route }) {

    // get userId and token from Tab and pass them to children screens


    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="profil" component={Profil} initialParams={{
                token: route.params.token,
                userId: route.params.userId
            }} />

            {/* <Stack.Screen name="ContactSP" component={ServciceProviderProfil}  initialParams={{
                token: route.params.token,
                userId: route.params.userId
            }}/> */}
        </Stack.Navigator>
    )

}
