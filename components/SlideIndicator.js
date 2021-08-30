import React from 'react';
import { Colors } from "../Style";
import { StyleSheet, View, Pressable } from "react-native";

export default function SlideIndicator({ routeName, routeParam }) {


    isSlideActive = (routeName, ActiveRoute) => {
        if (ActiveRoute == routeName) {
            return styles.indicatorActive
        }
        return styles.indicator
    }

    if (routeParam == false) {

        return (
            <View style={styles.containerIndicator}>
                <Pressable
                    style={this.isSlideActive(routeName, "First")}
                    onPress={() => this.props.navigation.navigate("First", { isServiceProvider: routeParam })}
                >
                </Pressable>
                <Pressable
                    style={this.isSlideActive(routeName, "Second")}
                    onPress={() => this.props.navigation.navigate("Second", { isServiceProvider: routeParam })}
                >
                </Pressable>
                <Pressable
                    style={this.isSlideActive(routeName, "Third")}
                    onPress={() => this.props.navigation.navigate("Third", { isServiceProvider: routeParam })}
                >
                </Pressable>
            </View>
        )
    } else {
        return (
            <View style={styles.containerIndicator}>
                <Pressable
                    style={this.isSlideActive(routeName, "First")}
                    onPress={() => this.props.navigation.navigate("First", { isServiceProvider: routeParam })}
                >
                </Pressable>
                <Pressable
                    style={this.isSlideActive(routeName, "Second")}
                    onPress={() => this.props.navigation.navigate("Second", { isServiceProvider: routeParam })}
                >
                </Pressable>
                <Pressable
                    style={this.isSlideActive(routeName, "Third_SP")}
                    onPress={() => this.props.navigation.navigate("Third_SP", { isServiceProvider: routeParam })}
                >
                </Pressable>
                <Pressable
                    style={this.isSlideActive(routeName, "CNIPictureUpload")}
                    onPress={() => this.props.navigation.navigate("CNIPictureUpload", { isServiceProvider: routeParam })}
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