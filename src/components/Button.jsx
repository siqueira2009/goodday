import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

export default function Button({image = null, text, textColor, bg = null, border}) {
    return (
        <TouchableOpacity style={[styles.container, bg && {backgroundColor: bg}, border && {borderColor: border}]}>
            {image && (
                <Image style={styles.image} source={image} resizeMode='contain'/>
            )}

            <Text style={[styles.text, textColor && {color: textColor}]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 60,
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderRadius: 8,
        borderWidth: 2
    },

    image: {
        width: '15%',
        maxWidth: 40,
        maxHeight: 40
    },

    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 500
    }
});