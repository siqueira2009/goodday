import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';

import Title from '../components/Title';
import Input from '../components/Input';

export default function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <ChevronLeft width="60" height="60" strokeWidth={1.5} color={"#14c871"} onPress={() => navigation.goBack()} style={{marginLeft: -15}}/>
                <Title title={"Acesse"} subtitle={"com email e senha"} align="left"/>
            </View>

            <View style={styles.inputs}>
                <Input label={"E-mail"} placeholder={"Digite seu e-mail..."} type='email-address' mode='email'/>
                <Input label={"Senha"} placeholder={"Digite a sua senha..."} type='password' mode='password'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 30,
        backgroundColor: 'white',
        justifyContent: 'start',
        alignItems: 'center',
        padding: 30,
        paddingTop: 50,
    },

    top: {
        width: '100%',
    },

    inputs: {
        width: '100%',
        gap: 15,
    }
})