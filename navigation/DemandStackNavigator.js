import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Demand from '../views/Demand/Demand';
import { Text } from "react-native";
import DemandDetails from "../views/Demand/DemandDetails";

export default function DemandStackNavigator () {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Demand"  component={Demand}/>
            <Stack.Screen name="DemandDetails" component={DemandDetails} />
        </Stack.Navigator>
    )

}
