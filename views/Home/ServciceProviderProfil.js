import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, StatusBar, Dimensions, StyleSheet, ImageBackground, Image, Pressable, Modal } from "react-native";

import { Colors, Typography } from "../../Style";
import Location from "../../components/SVG/Location";
import Note from '../../components/SVG/Note';
import Cake from '../../components/SVG/Cake';
import Comment from '../../components/SVG/Comment';
import Send from '../../components/SVG/Send';
import FlashMessage from "../../components/FlashMessage";

import { Request } from "../../components/Request";



const ServciceProviderProfil = ({ route }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [contacted, setContacted] = useState(false)


    const info = route.params.info;
    const userId = route.params.userId;

    const img = { uri: info.profilePicture }

    // const getLoyaltyYears = () => {

    // }
    const getAge = () => {
        const birthYear = new Date(info.birthdayDate).getFullYear();
        const currentYear = new Date(Date.now()).getFullYear();

        return currentYear - birthYear;
    }

    const contactSP = async () => {

        let user = null;
        await Request.get(`/user/${userId}`)
            .then(resp => {
                user = resp.data.user;
            })
            .catch(err => console.error("error : ", err))


        await Request.post("/command", {
            "details": `Salut ${info.firstName}, Je suis ${user.firstName} ${user.lastName}. Je réside à ${user.location} et j’aurai besoin de vos services en ${info.service}. Merci.`,
            "userId": user._id,
            "serviceProviderId": info._id,
            "date": Date.now()
        }).then(resp => {
            setModalVisible(false)
            setContacted(true)
        }).catch(err => console.error("erreur :", err))
    }


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


                {/* main  */}
                <View style={styles.main}>

                    {/* header */}
                    <View style={styles.top}>
                        <View stye={styles.SPname}>
                            <Text style={[Typography.title, { fontFamily: "Montserrat_Bold" }]}>{info.firstName + " " + info.lastName}</Text>
                            <Text style={[Typography.default, { fontFamily: "Montserrat_Regular" }]}>{"" + info.service}</Text>
                        </View>

                        {/* contact button */}
                        <Pressable style={styles.btnContainer} onPress={()=>{setModalVisible(true)}}>
                            <Text style={[styles.btnText, { color: Colors.white, fontFamily: "Montserrat_Regular", marginRight: 8 }]}>Contacter</Text>
                            <Send width={15} height={15} color={Colors.white} />
                        </Pressable>
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
                            <Text style={[{ fontFamily: "Montserrat_Regular", marginLeft: 25 }]}>1 an</Text>
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

                {/* modal: confirm contact SP */}
                <Modal
                    animationType="fade"
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <Text style={[Typography.detail, {fontSize: 15, fontFamily: "Montserrat_Regular"}]}>
                                {`Voulez-vous vraiment contacter ${info.firstName}?`}
                            </Text>
                            <View style={styles.modalBtnContainer}>
                                <Pressable style={[styles.btn, styles.btnConfirm]} onPress={contactSP}>
                                    <Text style={[Typography.default, {fontFamily: "Montserrat_Regular", color: Colors.white}]}>contacter</Text>
                                </Pressable>
                                <Pressable style={[styles.btn]} onPress={()=>setModalVisible(!modalVisible)}>
                                    <Text style={[Typography.default, {fontFamily: "Montserrat_Regular"}]}>annuler</Text>
                                </Pressable>
                            </View>
                        </View>

                    </View>
                </Modal>

                {contacted && <FlashMessage message={"demande envoyée"} />}

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
    modalContainer: {
        width: "100%",
        backgroundColor: Colors.bgColor,
        opacity: 0.8,
        flex: 1,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        backgroundColor: Colors.bgColor,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.primary,
        height: "15%"
    },  
    modalBtnContainer: {
        flex: 1,
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    btn: {
        borderColor: Colors.primary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 4
    },
    btnConfirm: {
        backgroundColor: Colors.primary,
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
    btnContainer: {
        marginTop: 6,
        flex: 1,
        flexGrow: 0.7,
        backgroundColor: Colors.primary,
        borderRadius: 5,
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 5,
        flexDirection: "row",
        justifyContent: "center",
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
        alignItems: "flex-start",

    },
    SPname: {

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