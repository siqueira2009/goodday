import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import logo from '../assets/logo.png'

export default function SplashScreen({navigation}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Welcome')
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.image} resizeMode='contain'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14c871',
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: '70%',
    }
})