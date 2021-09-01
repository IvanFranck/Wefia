import React, { useState } from "react";
import { Colors, Typography } from "../Style";
import { View, Text, StyleSheet } from "react-native";
import UploadFile from "./SVG/UploadFile";
import ProgressBar from "react-native-progress/Bar"

/**
 * 
 * @param {imageUploaded} number of cni image uploaded
 */

export default function IsCNIPicturesUploaded({ imageUploaded }) {

    return (
        <View style={styles.container}>
            <UploadFile width={100} height={100} color={Colors.blue} />
            <View style={styles.progressBar}>
                <ProgressBar progress={imageUploaded/2} height={20} borderRadius={15} unfilledColor={Colors.bgColor} color={Colors.blue} boderColor={Colors.blue} />
                <Text style={[Typography.detail, { fontFamily: "Montserrat_Regular"}]}>{imageUploaded}/2</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: "100%",
        alignItems: "center"
    },
    progressBar: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        flexGrow: 0.4,
        justifyContent: "space-evenly"
    }
})