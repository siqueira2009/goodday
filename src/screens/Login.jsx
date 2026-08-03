import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ChevronDown, ChevronLeft } from 'lucide-react-native';

import Title from '../components/Title';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';


export default function LoginScreen({navigation}) {
    const [checked, setChecked] = useState(false);

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

            <View style={styles.bottom}>
                <View style={{width: '50%'}}>
                    <Checkbox label={"Lembrar senha?"} action={setChecked} value={checked}/>
                </View>

                <View style={{width: '50%'}}>
                    <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                </View>
            </View>

            <View style={styles.buttons}>
                <Button text={"Acessar"} textColor={"white"} border={"#14c871"} bg={'#14c871'} width={'48%'} action={() => alert("Funcionalidade indisponível!")}/>
                <Button text={"Cadastrar"} border={"#14c871"} width={'48%'} action={() => navigation.navigate("Splash")}/>
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
    }
})