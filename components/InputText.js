import { TextInput, StyleSheet } from "react-native";
import { Colors, Typography } from "../Style";
import React from "react";

export default function InputText({placeholder, keyboardType, secureTextEntry, onChangeText, defaultValue}) {

    return (
        <TextInput
            style={[style.input, Typography.default, {fontFamily: "Montserrat_Regular" }]}
            selectionColor={Colors.primary}
            placeholder = {placeholder}
            keyboardType = {keyboardType}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            defaultValue={defaultValue}
        />
    )
}

const style = StyleSheet.create({
    input: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,

    },
})