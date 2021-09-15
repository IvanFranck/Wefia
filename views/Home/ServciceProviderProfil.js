import React, { useState } from "react";
import { Text, View, ScrollView, StatusBar, Dimensions, StyleSheet, ImageBackground, Image, Pressable, Animated } from "react-native";

import { Colors, Typography } from "../../Style";
import Location from "../../components/SVG/Location";
import Note from '../../components/SVG/Note';
import Cake from '../../components/SVG/Cake';
import Comment from '../../components/SVG/Comment';
import Send from '../../components/SVG/Send';



const ServciceProviderProfil = ({ route }) => {

    const [scrollY, setScrollY] = useState(new Animated.Value(0));
    const [offset, setOffset] = useState(0);

    const [scrollViewHeight, setScrollViewHeight] = useState(0);

    const [contentHeight, setContentHeight] = useState(0);

    const info = route.params.info;

    const img = { uri: info.profilePicture }

    const getLoyaltyYears = () => {

    }
    const getAge = () => {
        const birthYear = new Date(info.birthdayDate).getFullYear();
        const currentYear = new Date(Date.now()).getFullYear();

        return currentYear - birthYear;
    }

    const onScrollBtnMove = (event) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const direction = currentOffset > offset ? "down" : "up";
        const distance = offset ? (offset - currentOffset) : 0;
        const newPosition = scrollY._value - distance;

        // console.log(direction, newPosition);

        if (currentOffset > 0 && currentOffset < (contentHeight - scrollViewHeight)) {
            if (direction === 'down') {
                scrollY.setValue(newPosition > 62 ? 62 : newPosition)
            }
            if (direction === 'up') {
                scrollY.setValue(newPosition > 0 ? 0 : newPosition)
            }
            setOffset(currentOffset);
        }



    }

    return (
        <ScrollView
            style={styles.view}
            onScroll={onScrollBtnMove}
            scrollEventThrottle={1}
            onLayout={(ev) => { setScrollViewHeight(ev.nativeEvent.layout.height) }}
            onContentSizeChange={(w, h) => { setContentHeight(h) }}
        >

            {/* contact button */}
            <Animated.View style={[styles.btn, { transform: [{ translateY: scrollY }] }]}>
                <Pressable >
                    <Send width={24} height={24} color={Colors.white} />
                    {/* <Text style={[styles.btnText, { color: Colors.white, fontFamily: "Montserrat_Regular" }]}>Contacter</Text> */}
                </Pressable>
            </Animated.View>


            <View styles={styles.container}>
                <StatusBar
                    hidden={false}
                    translucent={true}
                    barStyle="dark-content"
                    backgroundColor={Colors.bgColor}
                />



                <ImageBackground style={styles.imageBackground} source={img} blurRadius={3}>
                    <Image source={img} style={styles.image} />
                </ImageBackground>
                <View style={{
                    backgroundColor: Colors.bgColor,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    position: "absolute",
                    width: "100%",
                    top: 180,
                    height: 190
                }}></View>
                <View style={styles.main}>

                    <View style={styles.top}>
                        <Text style={[Typography.title, { fontFamily: "Montserrat_Bold" }]}>{info.firstName + " " + info.lastName}</Text>
                        <Text style={[Typography.default, { fontFamily: "Montserrat_Regular" }]}>{"" + info.service}</Text>
                    </View>


                    {/* about */}
                    <View style={styles.about}>
                        <Text style={[Typography.subTitle, { marginBottom: 16, fontFamily: "Montserrat_Regular" }]}>A propos de moi</Text>


                        {/* loaction */}
                        <View style={styles.characteristic}>
                            <View style={styles.characteristicTitle}>
                                <View style={styles.iconContainer}>
                                    <Location width={11} height={11} stroke={Colors.primary} color={Colors.gray} secondFillColor={Colors.gray} />
                                </View>
                                <Text style={[Typography.detail, { fontFamily: "Montserrat_Regular" }]}>Localisation</Text>
                            </View>
                            <Text style={[{ fontFamily: "Montserrat_Regular", marginLeft: 25 }]}>{info.location}</Text>
                        </View>

                        {/* loyalty year */}
                        <View style={styles.characteristic}>
                            <View style={styles.characteristicTitle}>
                                <View style={styles.iconContainer}>
                                    <Note width={11} height={11} color={Colors.primary} />
                                </View>
                                <Text style={[Typography.detail, { fontFamily: "Montserrat_Regular" }]}>Présent sur wefia depuis</Text>
                            </View>
                            <Text style={[{ fontFamily: "Montserrat_Regular", marginLeft: 25 }]}>{info.location}</Text>
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

                    </View>



                    {/* comments section */}
                    <View style={styles.comment}>
                        <Text style={[Typography.subTitle, { marginVertical: 16, fontFamily: "Montserrat_Regular" }]}>Notes et commentaires</Text>
                        <View style={styles.commentContainer}>
                            <View style={styles.noComment}>
                                <Comment width={60} height={60} color={Colors.gray} />
                                <Text style={[Typography.detail, { fontFamily: "Montserrat_Regular", paddingBottom: 4 }]}>
                                    Soyez le premier à laisser un commentaire.
                                </Text>
                                <Text style={[Typography.detail, { fontFamily: "Montserrat_Regular" }]}>
                                    Contactez moi dès maintenant.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>



            </View>
        </ScrollView>
    )
}

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
        height: 200,
    },
    image: {
        position: "absolute",
        top: 60,
        left: Dimensions.get("window").width / 2 - 40,
        zIndex: 100,
        width: 80,
        height: 80,
        borderRadius: 100
    },
    main: {
        zIndex: 18,
        paddingHorizontal: 20,
        flexGrow: 1,
    },
    btn: {
        position: "absolute",
        bottom: 175,
        right: 15,
        backgroundColor: Colors.primary,
        borderRadius: 100,
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 100,
    },
    btnText: {
        fontSize: 12,
        lineHeight: 17,
        letterSpacing: 0.25,
        fontFamily: "Montserrat_Regular"
    },
    top: {
        width: "100%",
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",

    },
    about: {
        marginTop: 32,
        width: "100%"
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
    comment: {
        width: "100%",
        marginBottom: 100,
    },
    commentContainer: {
        width: "100%",
        flexDirection: "column",
        flex: 1,
    },
    noComment: {
        paddingVertical: 32,
        width: "100%",
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        flexDirection: "column"
    }
})

export default ServciceProviderProfil;