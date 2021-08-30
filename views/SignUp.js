import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./signUp/Home";
import First from "./signUp/First";
import Second from "./signUp/Second";
import Third from "./signUp/Third";
import ProfilePicture from "./signUp/ProfilePicture";
import Third_SP from "./signUp/ServiceProvider/Third";
import CNIPictureUpload from "./signUp/ServiceProvider/CNIPictureUpload";

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
                {/*
                    Service provider third sing up ui
                */}
                <Stack.Screen 
                    name = "Third_SP"
                    component = {Third_SP}
                />
                <Stack.Screen
                    name = "CNIPictureUpload"
                    component={CNIPictureUpload}
                />
                <Stack.Screen
                    name="ProfilePicture"
                    component={ProfilePicture}
                />
                    
            </Stack.Navigator>
    )
}