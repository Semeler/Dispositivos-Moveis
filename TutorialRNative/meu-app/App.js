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
         <Stack.Screen name="Welcome" component={WelcomeScreen} />
         <Stack.Screen name="Lessons" component={LessonsScreen} />
         <Stack.Screen name="LessonDetail" component={LessonDetailScreen} />
         <Stack.Screen name="Demo" component={DemoScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}
