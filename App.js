import React from "react";
import LogIn from './views/LogIn';
import Welcome from "./views/Welcome";
import SignUp from "./views/SignUp";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name = "Welcome" 
          component = {Welcome}
          
        />
        <Stack.Screen 
          name = "LogIn" component = {LogIn}
        />
        <Stack.Screen 
          name = "SignUp" component = {SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}