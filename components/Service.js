import React, {useState} from "react";
import { Text, Pressable, StyleSheet } from 'react-native';

export default function Service({wording}){

    //handle service select
    const [isSelected, setSelected] = useState(false);

    return(
        <Pressable
            onPress={setSelected(true)}
            style={styles.serviceContainer}
        >
            <Text>{wording}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    serviceContainer: {
        
    }
})