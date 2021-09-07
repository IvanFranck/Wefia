import React, { useState, useEffect } from "react"
import { Pressable, StyleSheet, Image, Text, View } from "react-native";
import { Colors, Typography } from "../Style";
import Location from "./SVG/Location";
import Star from "./SVG/Star";

export default function ServiceProviderCard({ data }) {


    const getAge = () => {
        let age = 0;
        const userBirthYear = new Date(data.birthdayDate).getFullYear();
        const currentYear = new Date().getFullYear();

        age = currentYear - userBirthYear;

        return age;

    }

    return (
        <Pressable style={styles.card}>

            {/* header */}
            <View style={styles.header}>

                {/* left */}
                <View style={styles.left}>
                    {/* entourer la phtot d'une couleur correspondante à son rang (debutant - intermediare - pro) */}
                    <Image
                        style={styles.image}
                        source={{
                            uri: `${data.profilePicture}`,
                        }}
                    />

                    {/* description */}
                    <View style={styles.description}>
                        <Text style={[Typography.default, { fontFamily: "Montserrat_Bold" }]}>{data.firstName + " " + data.lastName}</Text>
                        <View style={styles.personnalInfo}>
                            <Location
                                width={15}
                                height={18}
                                color={Colors.secondary}
                            />
                            <Text
                                style={[
                                    Typography.detail,
                                    {
                                        marginLeft: 4,
                                        fontFamily: "Montserrat_Regular"
                                    }
                                ]}
                            >{data.location}</Text>
                        </View>
                    </View>

                </View>


                {/* marks */}
                <View style={[styles.marks, styles.right]}>
                    <Star width={10} height={10} color={Colors.primary} fill={Colors.primary} />
                    <Text
                        style={[
                            Typography.detail,
                            {
                                fontFamily: "Montserrat_Regular",
                                marginLeft: 4,
                                fontSize: 10
                            }
                        ]}
                    >0</Text>
                    <Text
                        style={[
                            Typography.detail,
                            {
                                fontFamily: "Montserrat_Regular",
                                fontSize: 10
                            }
                        ]}
                    > ( 0 vote )</Text>
                </View>
            </View>

            {/* footer */}
            <View style={styles.footer}>
                <Text
                    style={[
                        Typography.default,
                        {
                            fontFamily: "Montserrat_Bold",
                            fontSize: 10
                        }
                    ]}
                >{data.service}</Text>
                <View>
                    <Text
                        style={[
                            Typography.detail,
                            {
                                fontFamily: "Montserrat_Regular",
                                fontSize: 10
                            }
                        ]}
                    >{getAge() + " ans"}</Text>
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
        flexDirection: "column",
        marginBottom: 16
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