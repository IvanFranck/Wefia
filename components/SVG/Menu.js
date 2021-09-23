import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function Menu({ width, height, color }) {
    return (

        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M3 7H21" stroke={color} stroke-width="1.5" stroke-linecap="round" />
            <Path d="M3 12H21" stroke={color} stroke-width="1.5" stroke-linecap="round" />
            <Path d="M3 17H21" stroke={color} stroke-width="1.5" stroke-linecap="round" />
        </Svg>

    )
};