import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Input({label, placeholder, type="text", mode="text"}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                keyboardType={type}
                inputMode={mode}
                autoCapitalize={type != "text" && "none"}
                secureTextEntry={type == "password" && true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    label: {
        width: '100%',
        fontSize: 22,
        marginLeft: 5,
        color: 'rgba(0, 0, 0, 0.8)'
    },

    input: {
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#14c871',
        height: 70,
        paddingHorizontal: 20,
        borderRadius: 8,
        fontSize: 18
    },  
});