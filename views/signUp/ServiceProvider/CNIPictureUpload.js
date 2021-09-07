import React, { useEffect, useState } from "react";
import { View, StatusBar, StyleSheet, Text, Dimensions, Pressable, Alert } from "react-native";
import * as Font from "expo-font";
import * as ImagePicker from 'expo-image-picker';
import { Colors, Typography } from "../../../Style";
import Camera from "../../../components/SVG/Camera";
import SlideIndicator from "../../../components/SlideIndicator";
import IsCNIPicturesUploaded from "../../../components/IsCNIPicturesUploaded";
import Gallery from "../../../components/SVG/Gallery";

export default function CNIPictureUpload({ navigation, route }) {

    // handle font loading state
    const [fontLoaded, loadFont] = useState(false);

    // handle profile uploaded image uri
    const [images, setImage] = useState([]);

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                Montserrat_Bold: require("../../../assets/fonts/MontserratBold.ttf"),
                Montserrat_Regular: require("../../../assets/fonts/MontserratRegular.ttf")
            });
            await loadFont(true);

        })();
    }, [fontLoaded]);

    const pickImageFromGallery = async () => {

        // take permission to access to user gallery
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert("Désolé, mais Wefia a besoin d'acceder à votre gallery pour continuer!");
        }


        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [5, 4],
            quality: 1,
        });


        if (!result.cancelled) {
            await setImage([...images, result.uri]);
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
            aspect: [5, 4],
        });

        if (!result.cancelled) {
            await setImage([...images, result.uri]);
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

                    {/* subtitle */}

                    <View style={styles.subTitle}>
                        <Text style={[Typography.subTitle, { fontFamily: "Montserrat_Bold" }]}>Inscription</Text>
                    </View>

                    {/* end */}


                    {/* import file section */}

                    <View style={styles.ImportFileSection}>

                        <View style={styles.wrapper}>

                            <IsCNIPicturesUploaded imageUploaded={images.length} />

                            <Text
                                style={[Typography.subTitle, { fontFamily: "Montserrat_Bold", marginTop: 8, marginBottom: 8 }]}
                            >
                                Photos de votre CNI
                            </Text>
                            <Text
                                style={[Typography.detail, { fontFamily: "Montserrat_Regular", textAlign: "center" }]}
                            >
                                Ajouter des photos récentes et visibles de votre CNI - recto et verso
                            </Text>

                            {/* camera btn */}
                            <Pressable
                                style={styles.btn}
                                onPress={pickImageFromCamera}
                            >
                                <Camera width={15} height={15} color={Colors.primary} />
                                <Text
                                    style={[Typography.detail, { fontFamily: "Montserrat_Regular", color: Colors.primary, marginLeft: 4 }]}
                                >

                                    Prendre une photo
                                </Text>
                            </Pressable>

                            {/* gallery btn */}
                            <Pressable
                                style={styles.btn}
                                onPress={pickImageFromGallery}
                            >
                                <Gallery width={15} height={15} color={Colors.primary} />
                                <Text
                                    style={[Typography.detail, { fontFamily: "Montserrat_Regular", color: Colors.primary, marginLeft: 4 }]}
                                >
                                    Gallerie
                                </Text>
                            </Pressable>
                        </View>

                    </View>

                    {/* end */}


                    {/* next and previous btn section */}
                    <View style={styles.btnContainer}>
                        <Pressable
                            style={styles.btnSecondary}
                            onPress={() => navigation.navigate("Third_SP", { isServiceProvider: route.params.isServiceProvider })}
                        >

                            <Text style={[styles.btnText, { color: Colors.primary }]}>Précédent</Text>
                        </Pressable>
                        <Pressable
                            style={styles.btnPrimary}
                            onPress={() => navigation.navigate("ProfilePicture")}
                        >
                            <Text style={[styles.btnText, { color: Colors.white }]}>S'inscrire</Text>
                        </Pressable>

                    </View>
                    {/* end */}


                    <SlideIndicator navigation={navigation} routeName={route.name} routeParam={route.params.isServiceProvider} />
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
    ImportFileSection: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1.2,
        borderWidth: 2,
        width: "100%",
        borderStyle: "dashed",
        borderRadius: 5,
        borderColor: Colors.blue,
        backgroundColor: Colors.white
    },
    wrapper: {
        marginVertical: 12,
        flex: 1,
        flexGrow: 0.9,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
    },
    btn: {
        marginTop: 8,
        flex: 1,
        flexDirection: "row",
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        flexGrow: 0.3,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    btnContainer: {
        width: "100%",
        flexGrow: 0.2,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 12,
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
    }
})