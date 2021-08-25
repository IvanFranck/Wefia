import React from "react";
import { View, ScrollView, StatusBar, StyleSheet, Text, Dimensions, Alert, Pressable } from "react-native";
import * as Font from "expo-font";
import { Colors, Typography } from "../../Style";
import InputText from "../../components/InputText";
import DatePicker from "react-native-datepicker";

export default class First extends React.Component {

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
    };

    isSlideActive = (routeName) => {
        if (this.props.route.name == routeName) {
            return styles.indicatorActive
        }
        return styles.indicator
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
                            <ScrollView contentContainerStyle={styles.formContainer}>

                                <View style={styles.formGroup}>
                                    <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>Date de naissance</Text>
                                    <DatePicker
                                        style={{ width: "100%" }}
                                        date={this.state.date}
                                        mode="date"
                                        placeholder="entrer votre date de naissance"
                                        format="YYYY-MM-DD"
                                        minDate="2016-05-01"
                                        maxDate="2016-06-01"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                height: 0,
                                                width: 0
                                            },
                                            dateInput: {
                                                height: 40,
                                                borderWidth: 1,
                                                padding: 10,
                                                borderRadius: 10,
                                            }
                                        }}
                                    />
                                </View>
                                <View style={styles.formGroup}>
                                    <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>Lieu de naissance</Text>
                                    <InputText
                                        placeholder="ex: Douala"
                                    />
                                </View>
                                <View style={styles.formGroup}>
                                    <Text style={[Typography.default, { marginBottom: 8, fontFamily: "Montserrat_Regular" }]}>Téléphone</Text>
                                    <InputText
                                        placeholder="ex: Nkolmesseng Safari"
                                    />
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.btnContainer}>
                            <Pressable
                                style={styles.btnSecondary}
                                onPress={() => this.props.navigation.navigate("First")}
                            >

                                <Text style={[styles.btnText, { color: Colors.primary }]}>Précédent</Text>
                            </Pressable>
                            <Pressable
                                style={styles.btnPrimary}
                                onPress={() => this.props.navigation.navigate("Third")}
                            >
                                <Text style={[styles.btnText, { color: Colors.white }]}>OK</Text>
                            </Pressable>
                        </View>

                        <View style={styles.containerIndicator}>
                            <Pressable
                                style={this.isSlideActive("First")}
                                onPress={() => this.props.navigation.navigate("First")}
                            >
                            </Pressable>
                            <Pressable
                                style={this.isSlideActive("Second")}
                                onPress={() => this.props.navigation.navigate("Second")}
                            >
                            </Pressable>
                            <Pressable
                                style={this.isSlideActive("Third")}
                                onPress={() => this.props.navigation.navigate("Third")}
                            >
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
    containerIndicator: {
        alignSelf: "center",
        flex: 1,
        flexDirection: "row",
        width: 80,
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    indicator: {
        height: 12,
        width: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.secondary,
        backgroundColor: Colors.bgColor,
    },
    indicatorActive: {
        height: 12,
        width: 12,
        borderRadius: 10,
        borderColor: Colors.secondary,
        backgroundColor: Colors.secondary
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