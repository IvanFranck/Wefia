import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Container from '../../components/container';
import DemandStatusImage from "../../components/DemandStatusImage"

import { Colors, Typography, demantStatus } from "../../Style";

const componentName = ({ route }) => {

    const getDemandStatusColor = () => {

        switch (route.params.demand.status) {
            case "en attente":
                return demantStatus.waiting;

            case "rejetée":
                return demantStatus.rejected;

            case "confirmée":
                return demantStatus.confirmed;

            case "terminée":
                return demantStatus.finished;
        }
    };

    const formatDate = (format) => {
        const date = new Date(route.params.demand.date);
        const hour = date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
        const minutes = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();

        const monthNames = ["Janv", "Fév", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Sept", "Oct", "Nov", "Déc"
        ];

        if (format === "long") return date.getDate() + " " + (monthNames[date.getMonth()]) + " " + date.getFullYear() + " - " + hour + ":" + minutes;
        return date.getDate() + " " + (monthNames[date.getMonth()]) + " " + date.getFullYear()
    }

    const SP = route.params.serviceProvider;


    return (
        <Container>
            <View style={styles.header}>
                <Text style={[Typography.subTitle, { fontFamily: "Montserrat_Bold", textAlign: "center", flexGrow: 1 }]}>Demandes</Text>
            </View>

            <DemandStatusImage color={getDemandStatusColor()} />

            <View style={styles.main}>
                <Text style={[Typography.title, { fontFamily: "Montserrat_Bold", color: getDemandStatusColor() }]}>{route.params.demand.status}</Text>
            </View>

            <View style={[styles.card]}>
                <View style={styles.left}>
                    <Image style={styles.img} source={{ uri: SP.profilePicture }} />
                    <View style={styles.leftDetails}>
                        <Text style={[Typography.default, { fontFamily: "Montserrat_Bold" }]}>{SP.firstName + " " + SP.lastName}</Text>
                        <Text style={[Typography.details, { color: "#AFB6AF", fontFamily: "Montserrat_Regular" }]}>{formatDate("long")}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={[Typography.details, { color: "#AFB6AF", fontFamily: "Montserrat_Regular" }]}>{SP.service}</Text>
                </View>
            </View>

            {/* <View style={{ paddingHorizontal: 8 }}>
                <Text style={[Typography.default, { fontFamily: "Montserrat_Regular" }]}>{route.params.demand.details}</Text>
            </View> */}

            {route.params.demand.status != "rejetée" &&
                <View style={styles.btnContainer}>
                <Pressable
                    style={styles.btnPrimary}
                >
                    <Text style={[styles.btnText, { color: Colors.white }]}> Ajoute run contrat</Text>
                </Pressable>
                <Pressable
                    style={styles.btnSecondary}
                >

                    <Text style={[styles.btnText, { color: Colors.primary }]}> Annuler la demande </Text>
                </Pressable>
            </View>}

        </Container>
    )
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 12,
        paddingVertical: 32,
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

export default componentName;
