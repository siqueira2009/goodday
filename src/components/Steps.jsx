import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Steps({totalSteps, step}) {  
    return (
        <View style={styles.container}>
            {Array.from({ length: totalSteps }).map((_, index) => (
                <View key={`step-${index}`} style={[styles.step, {width: Math.floor(100 / totalSteps) + '%'}, index == step && {backgroundColor: '#14c871'}]} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '70%',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
    },

    step: {
        height:7,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 20
    }
});