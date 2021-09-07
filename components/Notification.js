import React from 'react';
import { Pressable, StyleSheet }  from "react-native";
import NotificationIcon from './SVG/Notification';
import {Colors, Typography} from "../Style"


export default function Notification({action}){

    return (
        <Pressable 
            style={styles.notification}
            onPress={action}
        >
            <NotificationIcon width={18} height={18} color={Colors.primary} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    notification: {
        borderWidth: 1,
        borderBottomColor: Colors.primary,
        backgroundColor: Colors.bgColor,
        borderRadius: 150,
        padding: 8,
        height: 36,
    }
})