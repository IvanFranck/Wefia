import React, {useState, useEffect} from 'react';
import { View, Modal, Text, Pressable, StyleSheet } from 'react-native';
import {Colors, Typography} from "../Style"

const FlashMessage = ({message}) => {

    const [modalVisible, setModalVisible] = useState(true);
    
    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.modalContainer}>
                <Pressable style={styles.modalView} onPress={()=>setModalVisible(!modalVisible)} >
                    <Text style={[Typography.detail, { fontSize: 15, fontFamily: "Montserrat_Regular", color: Colors.primary }]}>
                        {message}
                    </Text>
                    
                </Pressable>
    
            </View>
        </Modal>
    )
    
};

const styles = StyleSheet.create({
    modalContainer: {
        width: "100%",
        flex: 1,
        flexGrow: 1,
        marginBottom: 80,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingHorizontal: 20
    },
    modalView: {
        backgroundColor:"#ffbd00",
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        flexGrow: 0,
    }
})

export default FlashMessage;
