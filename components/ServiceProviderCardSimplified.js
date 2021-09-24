import React, { useState, useEffect } from "react"
import { Pressable, StyleSheet, Image, Text, View } from "react-native";
import { Colors, Typography } from "../Style";
import Location from "./SVG/Location";

export default function ServiceProviderCardSimplified({ navigation, data }) {

    return (
        <Pressable
            onPress={() => navigation.navigate(
                "HomeStackNavigator",
                { screen: "ContactSP", params: { info: data.item } }
            )}
            style={styles.card}
        >

            {/* header */}
            <View style={styles.header}>

                {/* left */}
                <View style={styles.left}>
                    {/* entourer la phtot d'une couleur correspondante à son rang (debutant - intermediare - pro) */}
                    <Image
                        style={styles.image}
                        source={{
                            uri: `${data.item.profilePicture}`
                        }}
                    />

                    {/* description */}
                    <View style={styles.description}>
                        <Text style={[Typography.default, { fontFamily: "Montserrat_Bold" }]}>{data.item.firstName + " " + data.item.lastName}</Text>
                        <View style={styles.personnalInfo}>
                            <Location
                                width={15}
                                height={18}
                                stroke={Colors.secondary}
                                color={Colors.secondary}
                                secondFillColor={Colors.white}
                            />
                            <Text
                                style={[
                                    Typography.detail,
                                    {
                                        marginLeft: 4,
                                        fontFamily: "Montserrat_Regular"
                                    }
                                ]}
                            >{data.item.location}</Text>
                        </View>
                    </View>

                </View>


                {/* marks */}
                <View style={[styles.marks]}>

                    <Text
                        style={[
                            Typography.default,
                            {
                                fontFamily: "Montserrat_Bold",
                                fontSize: 10
                            }
                        ]}
                    >{data.item.service}</Text>
                </View>
            </View>


        </Pressable>
    )

}
const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.card,
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 10,
        width: "100%",
        flex: 1,
        flexGrow: 0.06,
        flexDirection: "column",
        marginBottom: 16,
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 5
    },
    left: {
        flex: 1,
        flexDirection: "row"
    },
    header: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    description: {
        marginLeft: 8,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    personnalInfo: {
        flex: 1,
        flexDirection: "row",
        marginTop: 4
    },
    marks: {
        flex: 1,
        flexGrow: 0.4,
        flexDirection: "row",
        alignSelf: "flex-start"
    },
    footer: {
        marginTop: 12
    }
})