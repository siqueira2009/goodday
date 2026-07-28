import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Title({title, subtitle = null}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && (<Text style={styles.subtitle}>{subtitle}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },

    title: {
        textAlign: 'center',
        fontSize: 38,
        fontWeight: 600,
        color: 'rgba(0, 0, 0, 0.8)',
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.8)',
    }
});