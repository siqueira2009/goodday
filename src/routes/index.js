// Importação das dependências
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importação das telas
import SplashScreen from '../screens/Splash';

// Inicialização
const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
    )
}