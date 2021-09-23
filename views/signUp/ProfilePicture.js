import React, { useEffect, useState } from "react";
import { View, StatusBar, StyleSheet, Text, Dimensions, Pressable, Alert } from "react-native";
import * as Font from "expo-font";
import * as ImagePicker from 'expo-image-picker';
import { Colors, Typography } from "../../Style";
import ShowProfileImage from "../../components/ShowProfileImage"
import Camera from "../../components/SVG/Camera";
import Gallery from "../../components/SVG/Gallery";
import { Request } from "../../components/Request";


export default function ProfilePicture({ navigation, route }) {

    // handle font loading state
    const [fontLoaded, loadFont] = useState(false);

    // handle profile uploaded image uri
    const [image, setImage] = useState({});

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                Montserrat_Bold: require("../../assets/fonts/MontserratBold.ttf"),
                Montserrat_Regular: require("../../assets/fonts/MontserratRegular.ttf")
            });
            await loadFont(true);

        })();
    }, []);

    const pickImageFromGallery = async () => {

        // take permission to access to user gallery
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert("Désolé, mais Wefia a besoin d'acceder à votre gallery pour continuer!");
        }


        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result)
        }
    }

    const pickImageFromCamera = async () => {

        // take permission to access to user camera
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert("Désolé, mais Wefia a besoin d'acceder à votre camera pour continuer!");
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
        });

        if (!result.cancelled) {
            setImage(result)
        }
    }




    const AddProfilePricture = async () => {
        if (image) {

            await Request.post(`/user/update/profilePicture/${route.params.userId}`, { "profilePicture": image.uri })
                .then(resp => {
                    navigation.navigate("tab", { userId: resp.data.user._id });
                }).catch(error => {
                    console.error("error :", error);
                    throw error;
                })

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

                <View style={styles.main}>

                    <View style={styles.subTitle}>
                        <Text
                            style=
                            {
                                [
                                    Typography.subTitle,
                                    { width: "100%", fontFamily: "Montserrat_Bold", textAlign: "center" }
                                ]
                            }
                        >
                            Ajoutez une photo de profil
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Montserrat_Regular",
                                color: Colors.secondary,
                                letterSpacing: 0.2,
                                marginTop: 4,
                                textAlign: "center"
                            }}

                        >
                            Aidez les autres à vous reconnaitre. Mettez une photo récente.
                        </Text>
                    </View>


                    {/* profil image */}

                    <View style={styles.profilePicture}>
                        <ShowProfileImage imageUri={image.uri} />
                    </View>

                    {/* end */}



                    {/* btn file import */}
                    <View style={styles.ulploadIconContainer}>
                        <Pressable
                            style={styles.ulploadIconCamera}
                            onPress={pickImageFromCamera}
                        >
                            <Camera width={45} height={45} color={Colors.primary} />
                            <Text style={[Typography.detail, { fontSize: 11 }]}>Prendre une photo</Text>
                        </Pressable>
                        <Pressable
                            style={styles.ulploadIconGallery}
                            onPress={pickImageFromGallery}
                        >
                            <Gallery width={45} height={45} color={Colors.primary} />
                            <Text style={[Typography.detail, { fontSize: 11 }]}>Gallerie</Text>
                        </Pressable>
                    </View>
                    {/* end */}

                    <View style={styles.btnContainer}>
                        <Pressable
                            style={styles.btnPrimary}
                            onPress={AddProfilePricture}
                        >
                            <Text style={[styles.btnText, { color: Colors.white }]}>Définir comme photo de profil</Text>
                        </Pressable>
                        <Pressable
                            style={styles.btnSecondary}
                            onPress={() => Alert.alert("passer")}
                        >

                            <Text style={[styles.btnText, { color: Colors.primary }]}>Passer cette étape</Text>
                        </Pressable>
                    </View>



                </View>
            </View>

        )
    } else {
        return null;
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
        flexDirection: "column",
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
    profilePicture: {
        marginTop: 16,
        flex: 1,
        flexGrow: 0.5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    ulploadIconContainer: {
        flex: 1,
        flexDirection: "row",
        flexGrow: 0.2,
        width: "100%",
        justifyContent: "space-between",
    },
    ulploadIconCamera: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 0.4,

    },
    ulploadIconGallery: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 0.4
    },
    btnContainer: {
        width: "100%",
        flexGrow: 0.2,
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: 24,
    },
    btnPrimary: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 8,
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