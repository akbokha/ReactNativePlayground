import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

const Button = ({onPressMethod, children}) => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPressMethod}
        >
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;