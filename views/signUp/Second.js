import React, { useState, useEffect } from "react";
import { View, ScrollView, StatusBar, StyleSheet, Text, Dimensions, Alert, Pressable } from "react-native";
import * as Font from "expo-font";
import { Colors, Typography } from "../../Style";
import InputText from "../../components/InputText";
import DatePicker from "@react-native-community/datetimepicker";
import SlideIndicator from "../../components/SlideIndicator";

export default function First({ navigation, route }) {

    // handle the font loading state
    const [fontLoaded, loadFont] = useState(false);

    //handle datePicker
    const [show, setShow] = useState(false);

    // handle input data
    const [location, setlocation] = useState("");
    const [birthdayDate, setbirthdayDate] = useState(new Date("2000-01-01"));
    const [birthdayPlace, setbirthdayPlace] = useState("");

    const [formatDate, setformatDate] = useState("");


    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                Montserrat_Bold: require("../../assets/fonts/MontserratBold.ttf"),
                Montserrat_Regular: require("../../assets/fonts/MontserratRegular.ttf")
            });
            loadFont(true);
        })();
    }, [])

    //handle onchange dateTimePicker
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || birthdayDate;
        setbirthdayDate(currentDate);
        setShow(false);
        
        let template = new Date(currentDate);
        let newFormatDate = template.getFullYear() + " / " + (template.getMonth()+1) + " / " + template.getDate();
        setformatDate(newFormatDate);
    }

    //handle navigation to the third sign up ui: if it is serice provider sign up process navigate to the SP third ui 
    const handleNavigationToThird = () => {
        if (route.params.isServiceProvider) {
            navigation.navigate("Third_SP", { 
                ...route.params,
                second: {
                    "location": location,
                    "birthdayDate": formatDate,
                    "birthdayPlace": birthdayPlace
                }
            });
        } else {
            navigation.navigate("Third", { 
                ...route.params,
                second: {
                    "location": location,
                    "birthdayDate": formatDate,
                    "birthdayPlace": birthdayPlace
                }
            });
        }
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

                            {/* date */}

                            <View style={styles.formGroup}>

                                <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>Date de naissance</Text>
                                <Pressable
                                    onPress = {()=>setShow(true)}
                                    style={{
                                        height: 40,
                                        width: "100%",
                                        borderWidth: 1,
                                        padding: 10,
                                        borderRadius: 10,
                                    }}
                                >
                                    <Text style={[Typography.default, { fontFamily: "Montserrat_Regular" }]}>{formatDate}</Text>
                                </Pressable>
                                {show && (<DatePicker
                                    value={birthdayDate} 
                                    mode="date"
                                    display="default"
                                    format="YYYY-MM-DD"
                                    minimumDate={new Date("1960-12-31")}
                                    maximumDate={new Date("2003-12-31")}
                                    is24Hour={true}
                                    onChange={onChange}
                                    style={{

                                    }}
                                />)}
                            </View>


                            {/* place of birth */}

                            <View style={styles.formGroup}>
                                <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>Lieu de naissance</Text>
                                <InputText
                                    placeholder="ex: Douala"
                                    onChangeText={text => setbirthdayPlace(text)}
                                    defaultValue={birthdayPlace}
                                />
                            </View>


                            {/* localisation */}

                            <View style={styles.formGroup}>
                                <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>Localisation</Text>
                                <InputText
                                    placeholder="ex: Yaoundé - Essos"
                                    onChangeText={text => setlocation(text)}
                                    defaultValue={location}
                                />
                            </View>

                        </ScrollView>
                    </View>

                    <View style={styles.btnContainer}>
                        <Pressable
                            style={styles.btnSecondary}
                            onPress={() => navigation.navigate("First", { isServiceProvider: route.params.isServiceProvider })}
                        >

                            <Text style={[styles.btnText, { color: Colors.primary }]}>Précédent</Text>
                        </Pressable>
                        <Pressable
                            style={styles.btnPrimary}
                            onPress={handleNavigationToThird}
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