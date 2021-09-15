import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function Camera({ width, height, color }) {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M7 13H13" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M7 17H11" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>


    )
}