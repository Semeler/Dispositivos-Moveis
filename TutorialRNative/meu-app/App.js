import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LessonsScreen from './screens/LessonsScreen';
import LessonDetailScreen from './screens/LessonDetailScreen';
import DemoScreen from './screens/DemoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Tela Inicial" component={WelcomeScreen} />
        <Stack.Screen name="Lições" component={LessonsScreen} />
        <Stack.Screen name="Lição Detalhada" component={LessonDetailScreen} />
        <Stack.Screen name="Demonstração" component={DemoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
