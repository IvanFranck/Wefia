import React from 'react';
import { StyleSheet, Dimensions, View, Text, StatusBar, Pressable } from "react-native";
import { Colors, Typography } from "../Style";
import * as Font from "expo-font";

import Container from "../components/container"



export default class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fonatLoaded: false
        }
    };

    async laodFonts() {
        await Font.loadAsync({
            Montserrat_Bold: require("../assets/fonts/MontserratBold.ttf"),
            Montserrat_Regular: require("../assets/fonts/MontserratRegular.ttf")
        });
        this.setState({ fonatLoaded: true });
    }

    componentDidMount() {
        this.laodFonts();
    }


    render() {

        if (this.state.fonatLoaded) {

            return (
                <View style={styles.container} >
                    <StatusBar
                        hidden={false}
                        translucent={true}
                        barStyle="dark-content"
                        backgroundColor={Colors.bgColor}
                    />
                    <View style={styles.title}>
                        <Text style={[Typography.title, { fontFamily: "Montserrat_Bold" }]}>Des milliers de prestataires.</Text>
                        <Text style={[Typography.title, { fontFamily: "Montserrat_Bold" }]}>Tous à portée de main</Text>
                        <Text style={[Typography.title, { fontFamily: "Montserrat_Bold" }]}>sur Wefia.</Text>
                    </View>

                    <View style={styles.btnContainer}>
                        <Pressable
                            style={styles.btnPrimary}
                            onPress={() => this.props.navigation.navigate("LogIn")}
                        >
                            <Text style={[styles.btnText, {color: "white"}]}>Se connecter</Text>
                        </Pressable>
                        <Text>Ou</Text>
                        <Pressable
                            style={styles.btnSecondary}
                            onPress={() => this.props.navigation.navigate("SignUp")}
                        >
                            <Text style={[styles.btnText, {color: Colors.primary}]}>S'inscrire</Text>
                        </Pressable>
                    </View>
                </View>
            );
        } else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: Colors.bgColor,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
    },
    title: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 0.4
    },
    btnContainer: {
        width: "100%",
        flexGrow: 0.3,
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    btnPrimary: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        width: 156,
        borderRadius: 10,
        backgroundColor: 'black',
    },
    btnSecondary: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        width: 156,
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
})