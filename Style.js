import { StyleSheet } from "react-native";


exports.Colors  = {
    primary: "#141414",
    secondary: "#989898",
    white: "#F7F7F7",
    bgColor: "#E7E8EA"
}

exports.Typography = StyleSheet.create({
    title: {
        letterSpacing: 0.2,
        fontSize: 25,
        color: "#141414",
        fontWeight: "bold"
    },
    subTitle : {
        letterSpacing: 0.2,
        fontSize: 18,
        color: "#141414",
    },
    default: {
        fontSize: 14,
        color: "#141414",
        letterSpacing: 0.2
    }
});



exports.FontFamily = {
    main: "Montserrat"   
}
