import React, {useState} from 'react';
import { Image, Pressable} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import AddProfilePicture from './AddProfilePicture';

export default function ShowProfileImage ({imageUri, action}){

    if (imageUri) {
        return <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, borderRadius: "50%" }} />
    } else {
        return (
            <Pressable onPress={action}>
                <AddProfilePicture width="180" height="180" />
            </Pressable>
        )
    }    
}