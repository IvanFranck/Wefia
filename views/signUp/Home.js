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
                    <View style={styles.main}>
                        <Text style={styles.mainText}>Bienvenu parmi nous!</Text>
                        <Text style={styles.mainSubText}>Continuer l'inscription en tant que ...</Text>

                        <View style={styles.btnContainer}>
                            <Pressable
                                style={styles.btnPrimary}
                                onPress={() => this.props.navigation.navigate("First")}
                            >
                                <Text style={[styles.btnText, { color: "white" }]}>Prestataire de services</Text>
                            </Pressable>
                            <Text style={Typography.default}>Ou</Text>
                            <Pressable
                                style={styles.btnSecondary}
                                onPress={() => this.props.navigation.navigate("First")}
                            >
                                <Text style={[styles.btnText, { color: Colors.primary }]}>Demandeur de services</Text>
                            </Pressable>
                        </View>

                    </View>
                    <View style={styles.loginContainer}>
                        <Text style={styles.bottomText}>Vous avez déja un compte ?</Text>
                        <Pressable

                            onPress={() => this.props.navigation.navigate('LogIn')}
                        >
                            <Text style={styles.link}>Connectez vous.</Text>
                        </Pressable>
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
    main: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
        flexGrow: 0,
        fontFamily: "Montserrat_Bold",
    },
    btnContainer: {
        width: "100%",
        flexGrow: 0.3,
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 24
    },
    btnPrimary: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        width: "100%",
        borderRadius: 10,
        backgroundColor: 'black',
    },
    btnSecondary: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.primary
    },
    btnText: {
        fontSize: 16,
        lineHeight: 17,
        letterSpacing: 0.25,
        fontFamily: "Montserrat_Regular"
    },
    loginContainer: {
        flex: 1,
        flexGrow: 0.1,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    bottomText: {
        fontFamily: "Montserrat_Regular",
        color: Colors.secondary,
        letterSpacing: 0.2
    },
    link: {
        paddingLeft: 2,
        letterSpacing: 0.2,
        fontFamily: "Montserrat_Regular",
        color: Colors.primary
    }
})