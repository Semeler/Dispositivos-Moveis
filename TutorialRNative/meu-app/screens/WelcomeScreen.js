import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Bem-vindo ao React Native!</Text>
    <Text style={styles.text}>
      Este app ajuda você a aprender conceitos básicos do React Native de forma simples e interativa.
    </Text>
    <Button
      title="Iniciar Lições"
      onPress={() => navigation.navigate('Lessons')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  text: { fontSize: 16, textAlign: 'center', marginBottom: 30 },
});

export default WelcomeScreen;
