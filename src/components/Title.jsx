import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Title({title, subtitle = null, align = null}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, align && {textAlign: align}]}>{title}</Text>
            {subtitle && (<Text style={[styles.subtitle, align && {textAlign: align}]}>{subtitle}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 600,
        color: 'rgba(0, 0, 0, 0.8)',
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 22,
        color: 'rgba(0, 0, 0, 0.8)',
    }
});