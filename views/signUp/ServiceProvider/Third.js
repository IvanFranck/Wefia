import React, { useState, useEffect } from "react";
import { View, ScrollView, StatusBar, StyleSheet, CheckBox, Text, TextInput, Dimensions, Alert, FlatList, Pressable } from "react-native";
import * as Font from "expo-font";
import { Colors, Typography } from "../../../Style";
import SlideIndicator from "../../../components/SlideIndicator";
import InputText from "../../../components/InputText";
import InformationSVG from "../../../components/SVG/InformationSVG";
import Request from "../../../components/Request";

export default function Third_SP({ navigation, route }) {

    const [fontLoaded, loadFont] = useState(false);

    const [isCheck, check] = useState(false);

    const [services, setServices] = useState([]);

    const [seclectedService, selectService] = useState("");


    useEffect(() => {
        (async () => {

            await Font.loadAsync({
                Montserrat_Bold: require("../../../assets/fonts/MontserratBold.ttf"),
                Montserrat_Regular: require("../../../assets/fonts/MontserratRegular.ttf")
            });
            loadFont( true );
            console.log("fonts loaded");

            await Request.get("/service/")
                .then(resp => {

                    setServices( resp.data );
                    console.log("response: ", services);
                })
                .catch(err => {
                    console.log(err.message)
                })


        })();
    }, []);

    const pickService = (service) => {
        selectService(service)
    };


    const renderService = ({ item }) => {

        return (
            <Pressable
                onPress={() => pickService(item.wording)}
                style={[
                    styles.serviceContainer,
                    {
                        backgroundColor: seclectedService == item.wording ? Colors.primary : Colors.bgColor
                    }
                ]}
            >
                <Text
                    style={{
                        fontFamily: "Montserrat_Regular",
                        color: seclectedService == item.wording ?  Colors.white : Colors.primary,
                        letterSpacing: 0.2,
                        textAlign: "center",
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                        textAlignVertical: "center"

                    }}
                >{item.wording}</Text>
            </Pressable>
        )
    }






    if (fontLoaded && services) {

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

                            {/* RCCId */}

                            <View style={[styles.formGroup, { flexGrow: 1.2 }]}>
                                <Text style={[Typography.default, { fontFamily: "Montserrat_Regular" }]}>Numéro de contribuable </Text>
                                <View style={styles.info}>
                                    <InformationSVG width="16" height="16" color={Colors.secondary} />
                                    <Text style={{ color: Colors.secondary, marginLeft: 4 }}>Ce champ est facultatif </Text>
                                </View>
                                <TextInput
                                    style={[styles.input, Typography.default, { fontFamily: "Montserrat_Regular" }]}
                                    selectionColor={Colors.primary}
                                />
                            </View>

                            {/* Services */}

                            <View style={[styles.formGroup, { flexGrow: 0.8, marginVertical: 8 }]}>
                                <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>Service</Text>

                                <FlatList
                                    data={services}
                                    renderItem={renderService}
                                    horizontal={true}
                                    keyExtractor={item => item._id}
                                />

                            </View>


                            {/* @mail */}

                            <View style={styles.formGroup}>
                                <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>Adresse mail</Text>
                                <InputText
                                    placeholder="ex: johnDoe@gmail.com"
                                    keyboardType="email-address"
                                />
                            </View>


                            {/* password */}

                            <View style={styles.formGroup}>
                                <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>Mot de passe</Text>
                                <InputText
                                    placeholder="entrer votre mot de passe"
                                    secureTextEntry={true}
                                />
                            </View>


                            {/* use conditions */}

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
                            style={styles.btnPrimary}
                            onPress={() => navigation.navigate("CNIPictureUpload", { isServiceProvider: route.params.isServiceProvider })}
                        >
                            <Text style={[styles.btnText, { color: Colors.white }]}>OK </Text>
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
        height: 400,
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
        flexGrow: 1.2
    },
    input: {
        height: 35,
        width: "100%",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    info: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
        flexGrow: 0.9,
        marginTop: 4
    },
    serviceContainer: {
        borderWidth: 1,
        borderColor: Colors.primary,
        marginRight: 8,
        borderRadius: 100
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
        flexGrow: 0.8,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingTop: 24,
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