import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function Gallery({ width, height, color }) {
    return (
        <Svg width={width} height={height} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M19.5 47.6666H32.5C43.3333 47.6666 47.6667 43.3332 47.6667 32.4999V19.4999C47.6667 8.66658 43.3333 4.33325 32.5 4.33325H19.5C8.66666 4.33325 4.33333 8.66658 4.33333 19.4999V32.4999C4.33333 43.3332 8.66666 47.6666 19.5 47.6666Z" stroke={color} stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M19.5 21.6667C21.8932 21.6667 23.8333 19.7266 23.8333 17.3333C23.8333 14.9401 21.8932 13 19.5 13C17.1068 13 15.1667 14.9401 15.1667 17.3333C15.1667 19.7266 17.1068 21.6667 19.5 21.6667Z" stroke={color} stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5.785 41.0584L16.4667 33.8867C18.1783 32.7384 20.6483 32.8684 22.1867 34.19L22.9017 34.8184C24.5917 36.27 27.3217 36.27 29.0117 34.8184L38.025 27.0834C39.715 25.6317 42.445 25.6317 44.135 27.0834L47.6667 30.1167" stroke={color} stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}