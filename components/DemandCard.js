import React, { useEffect, useState } from 'react';
import { View, Pressable, Image, StyleSheet, Text, ActivityIndicator } from 'react-native';

import { Request } from '../components/Request';

import { Colors, Typography, demantStatus } from '../Style'

const DemandCard = function ({ demand, navigation }) {

    const [SP, setSP] = useState(null);

    useEffect(() => {
        (async () => {

            await Request.get(`/serviceProvider/${demand.serviceProviderId}`)
                .then(resp => setSP(resp.data.serviceProvider))
                .catch(err => console.error(err))
        })();

    }, [])

    const formatDate = (format) => {
        const date = new Date(demand.date);
        const hour = date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
        const minutes = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();

        const monthNames = ["Janv", "Fév", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Sept", "Oct", "Nov", "Déc"
        ];

        if (format === "long") return date.getDate() + " " + (monthNames[date.getMonth()]) + " " + date.getFullYear() + " " + hour + ":" + minutes;
        return date.getDate() + " " + (monthNames[date.getMonth()]) + " " + date.getFullYear()
    }

    const getDemandStatusColor = () => {

        switch (demand.status) {
            case "en attente":
                return demantStatus.waiting;

            case "rejetée":
                return demantStatus.rejected;

            case "confirmée":
                return demantStatus.confirmed;

            case "terminée":
                return demantStatus.finished;
        }
    }


    if (SP) {
        return (
            <Pressable style={[styles.card, {borderLeftColor: getDemandStatusColor()}]}>
                <View style={styles.left}>
                    <Image style={styles.img} source={{ uri: SP.profilePicture }} />
                    <View style={styles.leftDetails}>
                        <Text style={[Typography.details, { color: "#AFB6AF", fontFamily: "Montserrat_Regular" }]}>{SP.service}</Text>
                        <Text style={[Typography.default, { fontFamily: "Montserrat_Bold" }]}>{SP.firstName + " " + SP.lastName}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={[Typography.details, { color: "#AFB6AF", fontFamily: "Montserrat_Regular" }]}>{formatDate()}</Text>
                    <Text style={[Typography.default, { color: getDemandStatusColor(), fontFamily: "Montserrat_Regular" }]}>{demand.status}</Text>
                </View>
            </Pressable>
        )

    }

    return null
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 12,
        borderLeftWidth: 5,
        borderRadius: 5,
        paddingVertical: 16,
        paddingHorizontal: 8,
    },
    left: {
        flex: 1,
        flexDirection: "row",
        flexGrow: 0.5
    },
    leftDetails: {
        marginLeft: 8,
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",

    },
    right: {
        flex: 1,
        flexDirection: "column",
        flexGrow: 0.5,
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    img: {
        width: 45,
        height: 45,
        borderRadius: 40
    }
})

export default DemandCard;
