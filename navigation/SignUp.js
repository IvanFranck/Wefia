import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../views/signUp/Home";
import First from "../views/signUp/First";
import Second from "../views/signUp/Second";
import Third from "../views/signUp/Third";
import ProfilePicture from "../views/signUp/ProfilePicture";
import Third_SP from "../views/signUp/ServiceProvider/Third";
import CNIPictureUpload from "../views/signUp/ServiceProvider/CNIPictureUpload";

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
                    initialParams={{
                        first : {
                            "firstName": "",
                            "secondName": "",
                            "phoneNumber": ""
                        }
                    }}
                />

                <Stack.Screen
                    name="Second"
                    component={Second}
                    initialParams= {{
                        first : {
                            "firstName": "",
                            "lastName": "",
                            "phoneNumber": 0
                        },
                        second: {
                            "location": "",
                            "birthdayDate": "",
                            "birthdayPlace": ""
                        }
                    }}
                />
                <Stack.Screen
                    name="Third"
                    component={Third}
                    initialParams= {{
                        first : {
                            "firstName": "",
                            "lastName": "",
                            "phoneNumber": ""
                        },
                        second: {
                            "location": "",
                            "birthdayDate": "",
                            "birthdayPlace": ""
                        }, 
                        third: {
                            "mailAddress": "",
                            "password": "",
                        }
                    }}
                />
                <Stack.Screen 
                    name = "Third_SP"
                    component = {Third_SP}
                    initialParams= {{
                        first : {
                            "firstName": "",
                            "lastName": "",
                            "phoneNumber": 0
                        },
                        second: {
                            "location": "",
                            "birthdayDate": "",
                            "birthdayPlace": ""
                        },
                        third: {
                            "RCCId": "",
                            "mailAddress": "",
                            "password": "",
                            "useConditions": false
                        }
                    }}
                />
                <Stack.Screen
                    name = "CNIPictureUpload"
                    component={CNIPictureUpload}
                    initialParams= {{
                        first : {
                            "firstName": "",
                            "lastName": "",
                            "phoneNumber": 0
                        },
                        second: {
                            "location": "",
                            "birthdayDate": "",
                            "birthdayPlace": ""
                        },
                        third: {
                            "RCCId": "",
                            "mailAddress": "",
                            "password": "",
                            "useConditions": false
                        },
                        CNIPictureUpload: []
                    }}
                />
                <Stack.Screen
                    name="ProfilePicture"
                    component={ProfilePicture}
                />
                    
            </Stack.Navigator>
    )
}