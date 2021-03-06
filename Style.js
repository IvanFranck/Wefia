import { StyleSheet } from "react-native";


exports.Colors  = {
    primary: "#141414",
    secondary: "#989898",
    white: "#F7F7F7",
    bgColor: "#E7E8EA",
    alert: "#fb8500",
    blue: "#99B4EA",
    card: "#D7D8DA",
    gray: "#DCDDE0",
}

exports.demantStatus = {
    waiting: "#fb8b24",
    confirmed: "#e36414",
    rejected: "#9a031e",
    finished: "#004b23"
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
    }, 
    detail: {
        fontSize: 14,
        color: "#989898",
        letterSpacing: 0.2
    }
});

