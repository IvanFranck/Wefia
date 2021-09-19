import React, { useMemo, useState, useEffect } from "react";
import * as Font from "expo-font";


import { AuthContext } from "./components/Context"

import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import { Colors } from "./Style";
import RootNavigator from "./navigation/RootNavigator";




export default function App() {


  //handle fonts loading
  const [fontLoaded, loadFonts] = useState(false);

  useEffect(() => {
    (async () => {
        await Font.loadAsync({
            Montserrat_Bold: require("./assets/fonts/MontserratBold.ttf"),
            Montserrat_Regular: require("./assets/fonts/MontserratRegular.ttf")
        });
        loadFonts(true);
    })()
}, [fontLoaded])

  // 
  const authContext = useMemo(() => ({
    signIn: () => {
    },
    signOut: () => {

    },
    signIp: () => {

    },
  }));

  if (!fontLoaded) {
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