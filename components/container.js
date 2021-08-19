import { View, StatusBar, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Colors } from "../Style";

export default function Container(props) {

    return (

        <View styles={styles.container}>
            <StatusBar
                hidden={false}
                translucent={true}
                barStyle="dark-content"
                backgroundColor={Colors.bgColor}
            />
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height + 200,
        backgroundColor: Colors.bgColor,
        paddingTop: StatusBar.currentHeight + 20,
        paddingBottom: 20,
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },
})