// Importação das dependências
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importação das telas
import SplashScreen from '../screens/Splash';
import WelcomeScreen from '../screens/Welcome';

// Inicialização
const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_left'}} initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
    )
}