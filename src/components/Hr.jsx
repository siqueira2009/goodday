import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Hr() {
    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 1,
        backgroundColor: 'black',
        flex: 1,
        alignSelf: 'center',
    },
})