import React from 'react';
import { Colors } from "../Style";
import { StyleSheet, View, Pressable } from "react-native";

export default function SlideIndicator({ routeName, routeParam, navigation }) {


    const isSlideActive = (routeName, ActiveRoute) => {
        if (ActiveRoute == routeName) {
            return styles.indicatorActive
        }
        return styles.indicator
    }

    if (routeParam == false) {

        return (
            <View style={styles.containerIndicator}>
                <Pressable
                    style={isSlideActive(routeName, "First")}
                    onPress={() => navigation.navigate("First", { isServiceProvider: routeParam })}
                >
                </Pressable>
                <Pressable
                    style={isSlideActive(routeName, "Second")}
                    onPress={() => navigation.navigate("Second", { isServiceProvider: routeParam })}
                >
                </Pressable>
                <Pressable
                    style={isSlideActive(routeName, "Third")}
                    onPress={() => navigation.navigate("Third", { isServiceProvider: routeParam })}
                >
                </Pressable>
            </View>
        )
    } else {
        return (
            <View style={styles.containerIndicator}>
                <Pressable
                    style={isSlideActive(routeName, "First")}
                    onPress={() => navigation.navigate("First", { isServiceProvider: routeParam })}
                >
                </Pressable>
                <Pressable
                    style={isSlideActive(routeName, "Second")}
                    onPress={() => navigation.navigate("Second", { isServiceProvider: routeParam })}
                >
                </Pressable>
                <Pressable
                    style={isSlideActive(routeName, "Third_SP")}
                    onPress={() => navigation.navigate("Third_SP", { isServiceProvider: routeParam })}
                >
                </Pressable>
                <Pressable
                    style={isSlideActive(routeName, "CNIPictureUpload")}
                    onPress={() => navigation.navigate("CNIPictureUpload", { isServiceProvider: routeParam })}
                >
                </Pressable>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerIndicator: {
        alignSelf: "center",
        flex: 1,
        flexGrow: 0.2,
        flexDirection: "row",
        width: 80,
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    indicator: {
        height: 12,
        width: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.secondary,
        backgroundColor: Colors.bgColor,
    },
    indicatorActive: {
        height: 12,
        width: 12,
        borderRadius: 10,
        borderColor: Colors.secondary,
        backgroundColor: Colors.secondary
    }
})