import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';

export default function Input({label, placeholder, type="text", mode="text", action}) {
    const [shown, setShown] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                keyboardType={type}
                inputMode={mode}
                autoCapitalize={type != "text" && "none"}
                secureTextEntry={!shown && true}

                onChangeText={action}
            />

            {(type == "password" && !shown) && (
                <Eye style={styles.eye} width={30} height={30} strokeWidth={1.5} onPress={() => setShown(!shown)} />
            )}

            {(type == "password" && shown && (
                <EyeOff style={styles.eye} width={30} height={30} strokeWidth={1.5} onPress={() => setShown(!shown)} />
            ))}
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

    eye: {
        position: 'absolute',
        bottom: 19,
        right: 15,
    }
});