import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

import Container from '../../components/container';
import { Request } from "../../components/Request";
import Filter from '../../components/SVG/Filter';
import DemandCard from '../../components/DemandCard';

import { Colors, Typography } from "../../Style";

const Demand = function ({ navigation, route }) {

    const [demands, setDemands] = useState(null);


    useEffect(() => {
        
        (async () => {
            await Request.get(`/command/userId/${route.params.userId}`)
                .then(resp => {
                    setDemands(resp.data.commands);
                })
                .catch(err => console.error("erreur :", err))
        })();
    }, [demands]);

    if (demands) {

        return (

            <Container>
                <View style={styles.header}>
                    <Text style={[Typography.subTitle, { fontFamily: "Montserrat_Bold", textAlign: "center", flexGrow: 1 }]}>Demandes</Text>
                    <Filter width={20} height={20} color={Colors.primary} />
                </View>

                <View style={styles.demandContainer}>
                    { demands && demands.map( demand => {
                        return (
                            <DemandCard demand={demand} navigation={navigation} key={demand._id}/>
                        )
                    })}
                </View>

            </Container>
        )
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator color={Colors.primary} size="large" />
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    demandContainer: {
        marginTop: 32,
        flex: 1,
        flexDirection: 'column-reverse',
        width: "100%",
    }
})


export default Demand;

