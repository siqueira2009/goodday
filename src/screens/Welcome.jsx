import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import icon from '../assets/google.png'
import girldog from '../assets/girldog.jpg'

import Button from '../components/Button';
import Title from '../components/Title';

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={girldog} style={styles.image} resizeMode='contain'/>
                <Title title="Ótimo dia!" subtitle="Como deseja acessar?"/>
            </View>


            <View style={styles.buttonContainer}>
                <Button image={icon} text="Como deseja acessar?" textColor="#fff" bg={'#14c871'} border={'#14c871'}/>
                <Button text="Outras opções" bg={'#fff'} border={'#14c871'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },

    image: {
        width: 250
    }
})