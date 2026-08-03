import React, { useMemo, useState } from 'react';
import { MoveRight, MoveLeft } from 'lucide-react-native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import image1 from '../assets/feature1.png';
import image2 from '../assets/feature2.png';
import image3 from '../assets/feature3.png';
import image4 from '../assets/feature4.png';

import Steps from '../components/Steps';

export default function FeaturesScreen({navigation}) {
    const [step, setStep] = useState(0);

    const values = [
        ["Viva bem", "Adote hábitos que trazem mais equilíbrio, energia e qualidade para o seu dia a dia, com um acompanhamento que se encaixa na sua rotina."],
        ["Treine bem", "Tenha treinos guiados e adaptados ao seu nível, com orientações para evoluir com segurança, constância e resultados duradouros."],
        ["Divirta-se", "Transforme a sua jornada em uma experiência leve, com desafios, metas e conquistas que mantêm a sua motivação lá em cima."],
        ["Coma bem", "Receba planos alimentares simples e saborosos, alinhados ao seu objetivo, sem abrir mão do prazer de comer."]
    ];

    const images = [image1, image2, image3, image4]

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={images[step]} style={styles.image} resizeMode='contain'/>
            </View>

            <View style={styles.bottom}>
                <Steps totalSteps={4} step={step}/>

                <View style={styles.textArea}>
                    <Text style={styles.title}>{values[step][0]}</Text>

                    <Text style={styles.text}>{values[step][1]}</Text>
                </View>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={[styles.button, step <= 0 && styles.disabledButton]} disabled={step <= 0 && true} onPress={() => step > 0 && setStep(step - 1)}>
                        <MoveLeft width={45} height={45} strokeWidth={2} color={'white'}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => step < 3 ? setStep(step + 1) : alert("Você chegou ao fim da aplicação!")}>
                        <MoveRight width={45} height={45} strokeWidth={2} color={'white'}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 30,
        backgroundColor: '#14c871',
        justifyContent: 'start',
        alignItems: 'center',
        paddingTop: 50,
    },

    top: {
        flex: 1
    },

    bottom: {
        width: '100%',
        height: '60%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    image: {
        aspectRatio: '1/1',
        height: '100%',
        maxHeight: 350
    },

    textArea: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },  

    title: {
        textAlign: 'center',
        color: "#14c871",
        fontSize: 48,
        fontWeight: 500
    },

    text: {
        textAlign: 'justify',
        fontSize: 18
    },

    buttonArea: {
        flexDirection: 'row',
        gap: 20,
        height: '40%'
    },

    button: {
        aspectRatio: '1/1',
        height: 80,
        backgroundColor: '#14c871',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    disabledButton: {
        opacity: 0.3,
    }
})