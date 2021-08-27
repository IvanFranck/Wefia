import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const AddProfilePicture = ({width, height}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 179 179" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="84.5" cy="84.5" r="82.5" fill="#E7E8EA" stroke="black" stroke-width="4" />
            <Path d="M86.3778 86.3773C96.7484 86.3773 105.156 77.9702 105.156 67.5996C105.156 57.2289 96.7484 48.8218 86.3778 48.8218C76.0071 48.8218 67.6 57.2289 67.6 67.5996C67.6 77.9702 76.0071 86.3773 86.3778 86.3773Z" stroke="black" stroke-width="5.63333" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M118.638 123.933C118.638 109.399 104.179 97.6445 86.3779 97.6445C68.5765 97.6445 54.1176 109.399 54.1176 123.933" stroke="black" stroke-width="5.63333" stroke-linecap="round" stroke-linejoin="round" />
            <Circle cx="143.5" cy="143.5" r="33.5" fill="#E7E8EA" stroke="black" stroke-width="14" />
            <Path d="M133.5 144H152.5" stroke="black" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M143 153.5V134.5" stroke="black" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}

export default AddProfilePicture;