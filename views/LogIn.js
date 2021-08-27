import React from "react";
import { View, StatusBar, StyleSheet, Text, Dimensions, TextInput, Alert, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import * as Font from "expo-font";
import { Colors, Typography } from "../Style"


import InputText from "../components/InputText";
export default class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
            login: "",
            password: ""
        }
    }

    async loadFonts() {
        await Font.loadAsync({
            Montserrat_Bold: require("../assets/fonts/MontserratBold.ttf"),
            Montserrat_Regular: require("../assets/fonts/MontserratRegular.ttf")
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
                    <KeyboardAvoidingView
                        behavior="padding"
                        style={styles.main}
                    >
                        <Text style={styles.mainText}>Bon retour parmi nous. Nous sommes content de vous revoir.</Text>
                        <Text style={styles.mainSubText}>Remplissez le formulaire ci-dessous pour continuer.</Text>

                        <View style={styles.form}>
                            <InputText
                                placeholder="Adresse mail"
                                keyboardType="email-address"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="mot de passe"
                                selectionColor={Colors.primary}
                                secureTextEntry={true}
                            />
                            <Pressable
                                style={styles.btnLogin}
                                onPress={() => Alert.alert("se connecter")}
                            >
                                <Text style={[styles.btnText, { color: Colors.white }]}>Se Connecter</Text>
                            </Pressable>
                        </View>

                        <View style={styles.bottom}>

                            <Text style={[styles.bottomText, { textDecorationLine: 'underline', paddingBottom: 8 }]}>Mot de passe oublié ?</Text>
                            <View style={styles.forgetPassGroup}>
                                <Text style={styles.bottomText}>Vous n'avez pas de compte ?</Text>
                                <Pressable

                                    onPress={() => this.props.navigation.navigate('SignUp')}
                                >
                                    <Text style={styles.link}>Inscrivez-vous.</Text>
                                </Pressable>
                            </View>
                        </View>

                    </KeyboardAvoidingView>
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
    main: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    mainText: {
        fontFamily: "Montserrat_Bold",
        fontSize: 18,
        letterSpacing: 0.2,
        color: Colors.primary,
        fontWeight: "bold",
    },
    mainSubText: {
        paddingTop: 8,
        color: Colors.secondary
    },
    logo: {
        flexGrow: 0.2,
        fontFamily: "Montserrat_Bold",
    },
    form: {
        width: "100%",
        flex: 1,
        flexGrow: 0.5,
        flexDirection: "column",
        paddingTop: 28,
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    input: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,

    },
    btnLogin: {
        backgroundColor: Colors.primary,
        width: "100%",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        flexGrow: 0.15,
        justifyContent: "center"
    },
    btnText: {
        fontSize: 16,
        lineHeight: 17,
        letterSpacing: 0.25,
        fontFamily: "Montserrat_Regular"
    },
    bottom: {
        paddingTop: 18,
        flexDirection: "column",
        flex: 1,
        justifyContent: "flex-start",
        flexGrow: 0.2
    },
    bottomText: {
        fontFamily: "Montserrat_Regular",
        color: Colors.secondary,
        letterSpacing: 0.2
    },
    forgetPassGroup: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    link: {
        paddingLeft: 2,
        letterSpacing: 0.2,
        fontFamily: "Montserrat_Regular",
        color: Colors.primary
    }
})