// Importação das dependências
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importação das telas
import SplashScreen from '../screens/Splash';
import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login';
import CadastroScreen from '../screens/Cadastro'

// Inicialização
const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right'}} initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
        </Stack.Navigator>
    )
}