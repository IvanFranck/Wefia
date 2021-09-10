import React, { useMemo, useState } from "react";

import { AuthContext } from "./components/Context"

import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import { Colors } from "./Style";
import RootNavigator from "./navigation/RootNavigator";




export default function App() {

  const [isLoading, load] = useState(false);


  // 
  const authContext = useMemo(() => ({
    signIn: () => {
    },
    signOut: () => {

    },
    signIp: () => {

    },
  }));

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <ActivityIndicator color={Colors.primary} size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  )
}