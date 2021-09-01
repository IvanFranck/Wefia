import React from "react";
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