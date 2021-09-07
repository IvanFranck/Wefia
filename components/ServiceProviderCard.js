import React, { useState, useEffect } from "react"
import { Pressable, StyleSheet, Image, Text, View } from "react-native";
import { Colors } from "../Style";
import Location from "./SVG/Location";
import Star from "./SVG/Star";

export default function ServiceProviderCard({ data }) {


        return (
            <Pressable>
                
                {/* header */}
                <View style={styles.header}>

                    {/* entourer la phtot d'une couleur correspondante à son rang (debutant - intermediare - pro) */}
                    <Image />

                    {/* description */}
                    <View style={styles.description}>
                        <Text>Nom prestataire</Text>
                        <Location width={15} height={15} color={Colors.secondary} />
                    </View>

                    {/* marks */}
                    <View style={styles.marks}>
                        <Star width={15} height={15} color={Colors.primary} fill={Colors.primary} />
                        <Text>Note</Text>
                        <Text>nombre de votes</Text>
                    </View>
                </View>

                {/* footer */}
                <View style={styles.footer}>
                    <Text>libelle Service</Text>
                    <View>
                        <Text>Age</Text>
                        <Text>nombre d'année passée sur notre plateforme </Text>
                    </View>
                </View>

            </Pressable>
        )
 
}
const styles = StyleSheet.create({
    header: {},
    footer: {},
    marks: {}
})