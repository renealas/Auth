//Import a Library to help create a component
import React from 'react';
import {Text, View} from 'react-native';

// Create a Component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle:{
        backgroundColor: '#2C75FF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor:'#000',
        shadowOffset:{width:0, height:20},
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative',
    },
    textStyle:{
        fontSize:25,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
    },
};

//Make the Component available to other parts of the App.
export { Header };
