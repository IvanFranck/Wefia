import React, { useState, useEffect } from "react";
import { View, ScrollView, StatusBar, StyleSheet, Text, Dimensions, Alert, Pressable } from "react-native";
import * as Font from "expo-font";
import { Colors, Typography } from "../../Style";
import InputText from "../../components/InputText";
import SlideIndicator from "../../components/SlideIndicator";

export default function First({ route, navigation }) {

    // handle the font loading state
    const [fontLoaded, loadFont] = useState(false);

    //handle the validity of the form data
    const [validated, setValidated] = useState(false)

    // handle input data
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                Montserrat_Bold: require("../../assets/fonts/MontserratBold.ttf"),
                Montserrat_Regular: require("../../assets/fonts/MontserratRegular.ttf")
            });
            await loadFont(true);
            if (route.params.first){
                setPhoneNumber(route.params.first.phoneNumber)
                setFirstName(route.params.first.FissetFirstName)
                setlastName(route.params.first.lassetlastName)
            }
        })();

    }, [fontLoaded]);

    useEffect( () => {
        if (firstName && lastName && phoneNumber){
            setValidated(true);
        }else{
            setValidated(false)
        }
    }, [firstName, lastName, phoneNumber])

   

    const formatPhoneNumber = () => {
        const number = phoneNumber.split(" ").join("")
        return parseInt(number)
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

                            {/* first name */}
                            <View style={styles.formGroup}>
                                <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>Nom</Text>
                                <InputText
                                    onChangeText = {text => setFirstName(text)}
                                    defaultValue={firstName}
                                    placeholder="entrer votre nom"
                                />
                            </View>

                            {/* second name */}
                            <View style={styles.formGroup}>
                                <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>Pr??nom</Text>
                                <InputText
                                    onChangeText = {text => setlastName(text)}
                                    defaultValue={lastName}
                                    placeholder="entrer votre pr??nom"
                                />
                            </View>

                            {/* phone number */}
                            <View style={styles.formGroup}>
                                <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>T??l??phone</Text>
                                <InputText
                                    keyboardType="numeric"
                                    onChangeText = {text => setPhoneNumber(text)}
                                    defaultValue={phoneNumber}
                                    placeholder="entrer votre num??ro de t??l??phone"
                                />
                            </View>

                        </ScrollView>
                    </View>

                    <View style={styles.btnContainer}>
                        <Pressable
                            style={styles.btnSecondary}
                            onPress={() => navigation.navigate("Home", { isServiceProvider: route.params.isServiceProvider })}
                        >

                            <Text style={[styles.btnText, { color: Colors.primary }]}>Pr??c??dent</Text>
                        </Pressable>
                        <Pressable
                            style={!validated ? styles.btnPrimaryDisable : styles.btnPrimary }
                            onPress={() => navigation.navigate("Second", { 
                                isServiceProvider: route.params.isServiceProvider,
                                first : {
                                    "firstName": firstName,
                                    "lastName": lastName,
                                    "phoneNumber": formatPhoneNumber()
                                }
                            })}
                            disabled={!validated}
                        >
                            <Text style={[styles.btnText, { color: Colors.white }]}>OK</Text>
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
        backgroundColor: Colors.primary,
    },
    btnPrimaryDisable: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: Colors.secondary,
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