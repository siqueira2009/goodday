import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Checkbox({label, action, value, width = '40%'}) {
    return (
        <View style={[styles.checkboxContainer, {width: width}]}>
            <View style={[styles.checkbox, value && styles.pressed]} onTouchEnd={() => action(!value)}></View>
            <Text style={styles.text}>{label}</Text>
        </View>
    )
}

const styles = {
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },

    checkbox: {
        borderWidth: 1.5,
        borderColor: '#14c871',
        width: 25,
        height: 25,
        borderRadius: 4
    },

    pressed: {
        backgroundColor: '#14c871'
    },  

    text: {
        fontSize: 16,
        width: '100%'
    },
}