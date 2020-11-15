import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {

    const {buttonStyle, textStyle} = styles;

    return (
        <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
        <Text style={textStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex:1,
        backgroundColor: '#007aff',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    textStyle:{
        alignSelf:'center',
        color:'#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
};

export { Button };
