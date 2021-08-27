import React, { useEffect, useState } from "react";
import { View, StatusBar, StyleSheet, Text, Dimensions, Pressable, Image, Alert } from "react-native";
import * as Font from "expo-font";
import * as ImagePicker from 'expo-image-picker';
import { Colors, Typography } from "../../Style";
import ShowProfileImage from "../../components/ShowProfileImage"

export default function ProfilePicture() {

    // handle font loading state
    const [fontLoaded, loadFont] = useState(false);

    // handle profile uploaded image uri
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                Montserrat_Bold: require("../../assets/fonts/MontserratBold.ttf"),
                Montserrat_Regular: require("../../assets/fonts/MontserratRegular.ttf")
            });
            await loadFont(true);
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        console.log("reslut:", result);

        if (!result.cancelled) {
            setImage(result.uri)
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

                    <View style={styles.profilePictureIcon}>
                        <ShowProfileImage imageUri={image} action={pickImage}/>
                    </View>

                    <View style={styles.btnContainer}>
                        <Pressable
                            style={styles.btnPrimary}
                            onPress={() => Alert.alert("image ajoutée")}
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
    profilePictureIcon: {
        marginTop: 16,
        flex: 1,
        flexGrow: 0.9,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
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