import React from "react";
import LogIn from './views/LogIn';
import Welcome from "./views/Welcome";
import SignUp from "./views/SignUp";
import Home from "./views/Home/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from './navigation/Tab';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Tabs />
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name = "Welcomme" 
          component = {Welcome}
          
        />
        <Stack.Screen 
          name = "Home" 
          component = {Home}
          
        />
        <Stack.Screen 
          name = "LogIn" component = {LogIn}
        />
        <Stack.Screen 
          name = "SignUp" component = {SignUp}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}