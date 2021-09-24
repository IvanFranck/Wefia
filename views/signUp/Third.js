import React, { useState, useEffect } from "react";
import { View, ScrollView, StatusBar, StyleSheet, CheckBox, Text, Dimensions, Alert, Pressable } from "react-native";
import * as Font from "expo-font";
import { Colors, Typography } from "../../Style";
import SlideIndicator from "../../components/SlideIndicator";
import InputText from "../../components/InputText";

import {Request} from "../../components/Request";

export default function Third({ navigation, route }) {



    // handle the font loading state
    const [fontLoaded, loadFont] = useState(false);

    //handle the validity of the form data
    const [validated, setValidated] = useState(false)

    // handle input data
    const [mailAddress, setmailAddress] = useState("");
    const [password, setpassword] = useState("");

    // handle the uses conditions choice
    const [isCheck, check] = useState(false);

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                Montserrat_Bold: require("../../assets/fonts/MontserratBold.ttf"),
                Montserrat_Regular: require("../../assets/fonts/MontserratRegular.ttf")
            });
            loadFont(true);
        })();
    }, []);

    useEffect( () => {
        if (mailAddress && password && isCheck){
            setValidated(true);
        }else{
            setValidated(false)
        }
    }, [mailAddress, password, isCheck])

    const signUp = async () => {
        const data = { ...route.params.first, ...route.params.second, mailAddress, password };
        await Request.post("/user/signUp", data)
            .then((response) =>{
                navigation.navigate("ProfilePicture",  {  userId: response.data.user._id})
            })
            .catch((error) =>{
                console.log("erreur lors de l'envoie de la requete ",error);
                throw error;
            });
        
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
                <View style={styles.subTitle}>
                    <Text style={[Typography.subTitle, { fontFamily: "Montserrat_Bold" }]}>Inscription</Text>
                </View>
                <View style={styles.main}>

                    <View style={styles.form}>
                        <ScrollView contentContainerStyle={styles.formContainer}>


                            {/* @mail */}

                            <View style={styles.formGroup}>
                                <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>Adresse mail</Text>
                                <InputText
                                    placeholder="ex: johnDoe@gmail.com"
                                    keyboardType="email-address"
                                    onChangeText={text => setmailAddress(text)}
                                    defaultValue={mailAddress}
                                />
                            </View>


                            {/* password */}

                            <View style={styles.formGroup}>
                                <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>Mot de passe</Text>
                                <InputText
                                    placeholder="entrer votre mot de passe"
                                    secureTextEntry={true}
                                    onChangeText={text => setpassword(text)}
                                    defaultValue={password}
                                />
                            </View>


                            {/* uses conditions */}

                            <View style={styles.useConditionContainer}>
                                <CheckBox
                                    value={isCheck}
                                    style={styles.checkbox}
                                    onValueChange={() => check(!isCheck)}
                                    tintColors={{ true: Colors.primary, false: Colors.secondary }}
                                />
                                <Text style={{
                                    fontFamily: "Montserrat_Regular",
                                    color: Colors.secondary,
                                    letterSpacing: 0.2
                                }}>J'ai lu et j'accepte</Text>
                                <Pressable
                                    onPress={() => Alert.alert("conditions d'utilisation")}
                                >
                                    <Text
                                        style={[{
                                            fontFamily: "Montserrat_Regular",
                                            color: Colors.secondary,
                                            letterSpacing: 0.2,
                                            paddingLeft: 30
                                        },
                                        { textDecorationLine: 'underline', paddingBottom: 8 }]}
                                    >
                                        les conditions d'utilisation
                                    </Text>
                                </Pressable>
                            </View>


                        </ScrollView>
                    </View>

                    <View style={styles.btnContainer}>
                        <Pressable
                            style={styles.btnSecondary}
                            onPress={() => navigation.navigate("Second", { isServiceProvider: route.params.isServiceProvider })}
                        >

                            <Text style={[styles.btnText, { color: Colors.primary }]}>Précédent</Text>
                        </Pressable>
                        <Pressable
                            style={!validated ? styles.btnPrimaryDisable : styles.btnPrimary }
                            onPress={signUp}
                            disabled={!validated}
                        >
                            <Text style={[styles.btnText, { color: Colors.white }]}>S'inscrire</Text>
                        </Pressable>

                    </View>

                    <SlideIndicator navigation={navigation} routeName={route.name} routeParam={route.params.isServiceProvider} />


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
    form: {
        height: 340,
        width: "100%"
    },
    formContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    formGroup: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    useConditionContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
    },
    checkbox: {
        height: 30,
        width: 30
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
    btnPrimaryDisable: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: Colors.secondary,
    },
    btnPrimary: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: Colors.primary,
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
    },
})