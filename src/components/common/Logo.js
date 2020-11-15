import React from 'react';
import { View, Image } from 'react-native';

const Logo = ({ source }) => {
    return (
        <View style={styles.thumbnailContainerStyle}>
            <Image source={source} style={styles.thumbnailStyle} />
        </View>
    );
};

const styles = {
    thumbnailContainerStyle: {
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: '30%',
        marginRight: '40%',
        flexDirection: 'row',
    },
    thumbnailStyle:{
        height:200,
        width: 200,
       },
};

export { Logo };
