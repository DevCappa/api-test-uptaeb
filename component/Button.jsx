import React from "react";
import {View, TouchableOpacity, Text} from "react-native"

const Button = ({onPress, children, buttonStyle, textStyle}) => {
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={[{borderRadius:20, width: 100, height: 100, backgroundColor: "blue"}, textStyle]}>{children}</Text>
        </TouchableOpacity>
    );
};

export default Button;