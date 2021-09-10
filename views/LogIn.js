import React, { useState, useEffect } from "react";
import { View, StatusBar, StyleSheet, Text, Dimensions, TextInput, CheckBox, Pressable } from "react-native";
import * as Font from "expo-font";
import { Colors, Typography } from "../Style";
import DeviceStorage from "../services/DeviceStorage";
import Container from "../components/container";

import Request from "../components/Request";
import InputText from "../components/InputText";

export default function LogIn({ route, navigation }) {

    //handle the validity of the form data
    const [validated, setValidated] = useState(false)

    const [fontLoaded, loadFonts] = useState(false);

    // handle input data
    const [checked, check] = useState(false);
    const [mailAddress, setMailAddress] = useState("");
    const [password, setPassword] = useState("");



    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                Montserrat_Bold: require("../assets/fonts/MontserratBold.ttf"),
                Montserrat_Regular: require("../assets/fonts/MontserratRegular.ttf")
            });
            loadFonts(true);
        })();
    }, [fontLoaded])

    const logIn = async () => {
        await Request.post("/user/logIn", {
            mailAddress,
            password
        }).then(response => {
            DeviceStorage.saveItem("id_token", response.data.token);
            navigation.navigate("tab", {token: response.data.token, userId: response.data.userId})
        }).catch(error => {
            console.error("error :", error);
            throw error;
        })
    }




    if (fontLoaded) {

        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    translucent={true}
                    barStyle="dark-content"
                    backgroundColor={Colors.bgColor}
                />
                <Text style={[styles.logo, Typography.title]}>Wefia</Text>

                <Text style={styles.mainText}>Bon retour parmi nous. Nous sommes content de vous revoir.</Text>
                <Text style={styles.mainSubText}>Remplissez le formulaire ci-dessous pour continuer.</Text>

                <View style={styles.form}>

                    {/* mail address */}
                    <InputText
                        placeholder="Adresse mail"
                        keyboardType="email-address"
                        onChangeText={text => setMailAddress(text)}
                        defaultValue={mailAddress}
                    />

                    {/* password */}
                    <TextInput
                        style={styles.input}
                        placeholder="mot de passe"
                        selectionColor={Colors.primary}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                        defaultValue={password}
                    />

                    {/* remember me */}

                    <View style={styles.rememberMeConatainer}>
                        <CheckBox
                            value={checked}
                            style={styles.checkbox}
                            onValueChange={() => check(!checked)}
                            tintColors={{ true: Colors.primary, false: Colors.secondary }}
                        />
                        <Text style={{
                            fontFamily: "Montserrat_Regular",
                            color: Colors.secondary,
                            letterSpacing: 0.2
                        }}>Se souvenir de moi</Text>

                    </View>

                    {/* log in btn */}
                    <Pressable
                        style={styles.btnLogin}
                        onPress={logIn}
                    >
                        <Text style={[styles.btnText, { color: Colors.white }]}>Se Connecter</Text>
                    </Pressable>
                </View>

                <View style={styles.bottom}>

                    <Text style={[styles.bottomText, { textDecorationLine: 'underline', paddingBottom: 8 }]}>Mot de passe oublié ?</Text>
                    <View style={styles.forgetPassGroup}>
                        <Text style={styles.bottomText}>Vous n'avez pas de compte ?</Text>
                        <Pressable

                            onPress={() => navigation.navigate('SignUp')}
                        >
                            <Text style={styles.link}>Inscrivez-vous.</Text>
                        </Pressable>
                    </View>
                </View>


            </View>
        )
    } else {
        return null;
    }
}


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
        flexGrow: 0.7,
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
    rememberMeConatainer: {
        flex: 1,
        flexGrow: 0.4,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
    },
    checkbox: {
        height: 30,
        width: 30
    },
    btnLogin: {
        backgroundColor: Colors.primary,
        width: "100%",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        flexGrow: 0.1,
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