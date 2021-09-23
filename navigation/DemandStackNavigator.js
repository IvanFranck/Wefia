import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Demand from '../views/Demand/Demand';
import { Text } from "react-native";
import DemandDetails from "../views/Demand/DemandDetails";

export default function DemandStackNavigator ({route}) {

    // get userId and token from Tab and pass them to children screens


    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Demand"  component={Demand} initialParams={{
                userId: route.params.userId
            }}/>
            <Stack.Screen name="DemandDetails" component={DemandDetails} initialParams={{
                userId: route.params.userId
            }}/>
        </Stack.Navigator>
    )

}
