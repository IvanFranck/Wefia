import React from 'react';
import { Image } from "react-native";
import AddProfilePicture from './SVG/AddProfilePicture';

export default function ShowProfileImage({ imageUri }) {

    if (imageUri) {
        return (
            <Image
                source={{ uri: imageUri }}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                }}
            />
        )
    } else {
        return (
            <AddProfilePicture width="180" height="180" />
        )
    }
}