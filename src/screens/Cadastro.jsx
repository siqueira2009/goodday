import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ChevronDown, ChevronLeft } from 'lucide-react-native';

import google from '../assets/google.png';
import facebook from '../assets/facebook.png';

import Title from '../components/Title';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import Hr from '../components/Hr';


export default function CadstroScreen({navigation}) {
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <ChevronLeft width="60" height="60" strokeWidth={1.5} color={"#14c871"} onPress={() => navigation.goBack()} style={{marginLeft: -15}}/>
                <Title title={"Cadastrar"} subtitle={"Use seu email e crie uma senha"} align="left"/>
            </View>

            <View style={styles.inputs}>
                <Input label={"E-mail"} placeholder={"Digite seu e-mail..."} type='email-address' mode='email'/>
                <Input label={"Senha"} placeholder={"Digite a sua senha..."} type='password' mode='password'/>
                <Input label={"Confirme a senha"} placeholder={"Repita a sua senha..."} type='password' mode='password'/>
            </View>

            <View style={styles.buttons}>
                <Button text={"Cadastrar"} textColor={"white"} border={"#14c871"} bg={'#14c871'} width={'100%'} action={() => alert("Funcionalidade indisponível!")}/>
            </View>

            <View style={styles.otherHeader}>
                <Hr />
                <Text style={styles.otherText}>Ou continue com</Text>
                <Hr />
            </View>

            <View style={styles.otherOptions}>
                <Image source={google} style={styles.social} resizeMode='contain'/>
                <Image source={facebook} style={styles.social} resizeMode='contain'/>
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

    bottom: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    inputs: {
        width: '100%',
        gap: 15,
    },

    forgotPassword: {
        width: '100%',
        fontSize: 16,
        textAlign: 'right',
        textDecorationLine: 'underline'
    },

    buttons: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15,
    },

    otherHeader: {
        width: '100%',
        flexDirection: 'row'
    },

    otherText: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },

    otherOptions: {
        width: '100%',
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    social: {
        height: 60,
        width: 60,
    }
})