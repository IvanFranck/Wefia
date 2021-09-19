import React from "react";
import Svg, { Path } from "react-native-svg";

const Home = ({ width, height, color }) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M12 17.99V14.99" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>


    )
}

export default Home;


