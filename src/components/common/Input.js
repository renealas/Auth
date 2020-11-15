import React from 'react';
import {Text, View,TextInput} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, securetextentry}) => {
    const {inputStyle, containerStyle, labelStyle} = styles;
 return (
     <View style={containerStyle}>
         <Text style={labelStyle}>{label}</Text>
         <TextInput
                    secureTextEntry = {securetextentry}
                    value={value}
                    onChangeText={onChangeText}
                     placeholder={placeholder}
                     placeholderTextColor="#000000"
                     autoCapitalize="none"
                     autoCorrect={false}
                     style={inputStyle}
                    />
     </View>
 );
};

const styles = {
    inputStyle: {
        width: '100%',
        borderColor: '#2C75FF',
        borderWidth: 2,
        borderRadius: 25,
        height: '90%',
        marginBottom: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        color: '#465881',
        alignSelf: 'center',
        flex: 2,
    },
    labelStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 20,
        flex: 1,
        alignSelf: 'center',
        color: '#465881',
    },
    containerStyle:{
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
};

export {Input};
