import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./signUp/Home";
import First from "./signUp/First";
import Second from "./signUp/Second";
import Third from "./signUp/Third";
import ProfilePicture from "./signUp/ProfilePicture";

const Stack = createNativeStackNavigator();

export default function SignUp() {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="First"
                    component={First}
                />

                <Stack.Screen
                    name="Second"
                    component={Second}
                />
                <Stack.Screen
                    name="Third"
                    component={Third}
                />
                <Stack.Screen
                    name="ProfilePicture"
                    component={ProfilePicture}
                />
            </Stack.Navigator>
    )
}