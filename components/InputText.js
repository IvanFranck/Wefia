import { TextInput, StyleSheet } from "react-native";
import { Colors } from "../Style";
import React from "react";

export default function InputText({placeholder, keyboardType, secureTextEntry}) {

    return (
        <TextInput
            style={style.input}
            selectionColor={Colors.primary}
            placeholder = {placeholder}
            keyboardType = {keyboardType}
            secureTextEntry={secureTextEntry}
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