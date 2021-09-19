import { View, StatusBar, StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";
import { Colors } from "../Style";

export default function Container(props) {

    return (
        <ScrollView style={styles.view}>
            <View styles={styles.container}>
                <StatusBar
                    hidden={false}
                    translucent={true}
                    barStyle="dark-content"
                    backgroundColor={Colors.bgColor}
                />
                {props.children}
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    view: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height + 200,
        backgroundColor: Colors.bgColor,
        marginTop: StatusBar.currentHeight,
        paddingTop: 15,
        paddingHorizontal: 20,

    },
    container: {
        width: "100%",
        height: "100%",
    },
})