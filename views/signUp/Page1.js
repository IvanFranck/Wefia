import React from "react";
import { View, StatusBar, StyleSheet, Text, Dimensions, TextInput, Alert, Pressable, Linking } from "react-native";
import * as Font from "expo-font";
import { Colors, Typography } from "../../Style";

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        }
    }

    async loadFonts() {
        await Font.loadAsync({
            Montserrat_Bold: require("../../assets/fonts/MontserratBold.ttf"),
            Montserrat_Regular: require("../../assets/fonts/MontserratRegular.ttf")
        });
        this.setState({ fontLoaded: true });
    }

    componentDidMount() {
        this.loadFonts();
    }


    render() {

        if (this.state.fontLoaded) {

            return (
                <View style={styles.container}>
                    <StatusBar
                        hidden={false}
                        translucent={true}
                        barStyle="dark-content"
                        backgroundColor={Colors.bgColor}
                    />
                    <Text style={[styles.logo, Typography.title]}>Wefia</Text>
                    <View style={styles.subTitle}>
                        <Text style={[Typography.subTitle, { fontFamily: "Montserrat_Bold" }]}>Inscription</Text>
                    </View>
                    <View style={styles.main}>

                        <View style={styles.form}>

                            <View style={styles.formGroup}>
                                <Text style={[Typography.default, { fontSize: "Montserrat_Regular" }]}>Nom</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="entrer votre nom"
                                    selectionColor={Colors.primary}
                                />
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={[Typography.default, { fontSize: "Montserrat_Regular" }]}>Prénom</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="entrer votre prénom"
                                    selectionColor={Colors.primary}
                                />
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={[Typography.default, { fontSize: "Montserrat_Regular" }]}>Téléphone</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="entrer votre numéro de téléphone"
                                    selectionColor={Colors.primary}
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>

                        <View style={styles.btnContainer}>
                            <Pressable
                                style={styles.btnSecondary}
                                onPress={() => Alert.alert("précédent")}
                            >

                                <Text style={[styles.btnText, { color: Colors.primary }]}>Précédent</Text>
                            </Pressable>
                            <Pressable
                                style={styles.btnPrimary}
                                onPress={() => Alert.alert("OK")}
                            >
                                <Text style={[styles.btnText, { color: Colors.white }]}>OK</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            )
        } else {
            return null;
        }
    }

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
    subTitle: {
        flex: 1,
        width: "100%",
        flexGrow: .1,
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "flex-start"
    },
    main: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    logo: {
        flexGrow: 0.1,
        fontFamily: "Montserrat_Bold",
    },
    formGroup : {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    btnContainer: {
        width: "100%",
        flexGrow: 0.3,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 24
    },
    btnPrimary: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: 'black',
    },
    btnSecondary: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 10,
    },
    btnText: {
        fontSize: 16,
        lineHeight: 17,
        letterSpacing: 0.25,
        fontFamily: "Montserrat_Regular"
    },
})