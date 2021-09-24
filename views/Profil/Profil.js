import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, ImageBackground, Image, StyleSheet, Dimensions, ScrollView, StatusBar } from 'react-native';

import { Request } from '../../components/Request';
import Location from '../../components/SVG/Location';
import Cake from '../../components/SVG/Cake';

import { Colors, Typography } from '../../Style';
import Mail from '../../components/SVG/Mail';
import Menu from '../../components/SVG/Menu';

const Profil = ({ route }) => {

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        (async () => {
            await Request.get(`/user/${route.params.userId}`)
                .then(resp => setUserInfo(resp.data.user))
                .catch(err => console.error(err))
        })();
    }, []);

    const getAge = () => {
        const birthYear = new Date(userInfo.birthDay).getFullYear();
        const currentYear = new Date(Date.now()).getFullYear();

        return currentYear - birthYear;
    }

    if (userInfo) {

        return (
            <ScrollView
                style={styles.view}
            >

                <View styles={styles.container}>
                    <StatusBar
                        hidden={false}
                        translucent={true}
                        barStyle="dark-content"
                        backgroundColor={Colors.bgColor}
                    />
                    <View
                        style={{
                            backgroundColor: Colors.bgColor,
                            borderTopLeftRadius: 25,
                            borderTopRightRadius: 25,
                            position: "absolute",
                            width: "100%",
                            top: 180,
                            height: 190,
                            zIndex: 50
                        }}>
                    </View>

                    
                    <ImageBackground style={styles.imageBackground} source={{ uri: userInfo.profilePicture }} blurRadius={3}>
                        <View style={styles.header}>
                            <Text style={[Typography.title, {color: Colors.white, fontFamily: "Montserrat_Bold", flexGrow: 1, textAlign: "center"}]}>Profil</Text>
                            <Menu width={25} height={25} color={Colors.white} />
                        </View>
                    </ImageBackground>
                    <View style={styles.imageBorder}>
                        <Image source={{ uri: userInfo.profilePicture }} style={styles.image} />
                    </View>


                    {/* main */}
                    <View style={styles.main}>
                        <Text style={[Typography.subTitle, { fontFamily: "Montserrat_Bold", textAlign: "center" }]}>{userInfo.lastName + " " + userInfo.firstName}</Text>

                        {/* about */}
                        <View style={styles.about}>

                            {/* loaction */}
                            <View style={styles.characteristic}>
                                <View style={styles.characteristicTitle}>
                                    <View style={styles.iconContainer}>
                                        <Location width={11} height={11} stroke={Colors.primary} color={Colors.gray} secondFillColor={Colors.gray} />
                                    </View>
                                    <Text style={[Typography.detail, { fontFamily: "Montserrat_Regular" }]}>Localisation</Text>
                                </View>
                                <Text style={[{ fontFamily: "Montserrat_Regular", marginLeft: 25 }]}>{userInfo.location}</Text>
                            </View>

                            {/* age */}
                            <View style={styles.characteristic}>
                                <View style={styles.characteristicTitle}>
                                    <View style={styles.iconContainer}>
                                        <Cake width={11} height={11} color={Colors.primary} />
                                    </View>
                                    <Text style={[Typography.detail, { fontFamily: "Montserrat_Regular" }]}>Age</Text>
                                </View>
                                <Text style={[{ fontFamily: "Montserrat_Regular", marginLeft: 25 }]}>{getAge() + " ans"}</Text>
                            </View>

                            {/* mail */}
                            <View style={styles.characteristic}>
                                <View style={styles.characteristicTitle}>
                                    <View style={styles.iconContainer}>
                                        <Mail width={11} height={11} color={Colors.primary} />
                                    </View>
                                    <Text style={[Typography.detail, { fontFamily: "Montserrat_Regular" }]}>Adresse mail</Text>
                                </View>
                                <Text style={[{ fontFamily: "Montserrat_Regular", marginLeft: 25 }]}>{userInfo.mailAddress}</Text>
                            </View>

                            {/* phone number */}
                            <View style={styles.characteristic}>
                                <View style={styles.characteristicTitle}>
                                    <View style={styles.iconContainer}>
                                        <Mail width={11} height={11} color={Colors.primary} />
                                    </View>
                                    <Text style={[Typography.detail, { fontFamily: "Montserrat_Regular" }]}>numéro de téléphone</Text>
                                </View>
                                <Text style={[{ fontFamily: "Montserrat_Regular", marginLeft: 25 }]}>{userInfo.phoneNumber}</Text>
                            </View>

                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator color={Colors.primary} size="large" />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height + 200,
        backgroundColor: Colors.bgColor,
        marginTop: StatusBar.currentHeight,
    },
    container: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 20,

    },

    imageBackground: {
        width: "100%",
        height: 260,
    },
    header: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexGrow: 0.2
    },
    imageBorder: {
        position: "absolute",
        top: 150,
        left: Dimensions.get("window").width / 2 - 50,
        zIndex: 300,
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: Colors.bgColor,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 80,
        borderRadius: 100,
        height: 80,
        position: "absolute"
    },
    main: {
        width: "100%",
        flexDirection: "column",
        flexGrow: 1,
        zIndex: 1000,
        flex: 1,
        justifyContent: "center"
    },
    about: {
        width: "100%",
        flex: 1,
        alignItems: "flex-start",
        paddingHorizontal: 20,
        marginTop: 32
    },
    characteristic: {
        width: "100%",
        marginBottom: 16
    },
    characteristicTitle: {
        width: "100%",
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "row"
    },
    iconContainer: {
        backgroundColor: Colors.gray,
        padding: 5,
        borderRadius: 5,
        marginRight: 4
    },
})

export default Profil;

