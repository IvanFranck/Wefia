import React from 'react';
import { View, StyleSheet, Dimensions } from "react-native"
import { Colors, demantStatus } from '../Style';

const DemandStatusImage = (color) => {


    return (
        <View style={styles.container}>
            <View style={[styles.firstCircle, {borderColor: color.color}]}>
                <View style={styles.secondCircle}>
                    <View style={[styles.iconContainer, { backgroundColor: color.color }]}></View>
                </View>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({

    container: {
        marginTop: 32,
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginBottom: 16
    },
    firstCircle: {
        height: Dimensions.get("window").width - (Dimensions.get("window").width * 0.3),
        width: Dimensions.get("window").width - (Dimensions.get("window").width * 0.3),
        borderRadius: Dimensions.get("window").width,
        borderStyle: "dashed",
        borderWidth: 2,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    secondCircle: {
        height: Dimensions.get("window").width - (Dimensions.get("window").width * 0.5),
        width: Dimensions.get("window").width - (Dimensions.get("window").width * 0.5),
        borderRadius: Dimensions.get("window").width,
        backgroundColor: Colors.white,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 0.7
    },
    iconContainer: {
        height: Dimensions.get("window").width - (Dimensions.get("window").width * 0.7),
        width: Dimensions.get("window").width - (Dimensions.get("window").width * 0.7),
        borderRadius: 200,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 0.62
    }
})

export default DemandStatusImage;