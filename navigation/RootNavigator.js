import React from "react";
import LogIn from '../views/LogIn';
import Welcome from "../views/Welcome";
import SignUp from "../navigation/SignUp";
import Home from "../views/Home/Home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tab";




export default function RootNavigator() {


  const Stack = createNativeStackNavigator();




  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Welcomme" component={Welcome} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="tab" component={Tabs} />
      </Stack.Navigator>
  )
}