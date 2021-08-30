import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function Camera({width, height, color}) {
    return (
        <Svg width={width} height={height}viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M14.6467 47.6666H37.3533C43.3333 47.6666 45.7167 44.0049 45.9983 39.5416L47.125 21.6449C47.4283 16.9649 43.7017 12.9999 39 12.9999C37.6783 12.9999 36.465 12.2416 35.8583 11.0716L34.2983 7.92992C33.3017 5.95825 30.7017 4.33325 28.4917 4.33325H23.53C21.2983 4.33325 18.6983 5.95825 17.7017 7.92992L16.1417 11.0716C15.535 12.2416 14.3217 12.9999 13 12.9999C8.29835 12.9999 4.57168 16.9649 4.87502 21.6449L6.00168 39.5416C6.26168 44.0049 8.66668 47.6666 14.6467 47.6666Z" stroke={color} stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M22.75 17.3333H29.25" stroke={color} stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M26 39.0001C29.8783 39.0001 33.0417 35.8367 33.0417 31.9584C33.0417 28.0801 29.8783 24.9167 26 24.9167C22.1217 24.9167 18.9583 28.0801 18.9583 31.9584C18.9583 35.8367 22.1217 39.0001 26 39.0001Z" stroke={color} stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}