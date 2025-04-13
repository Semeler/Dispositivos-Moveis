import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const LessonDetailScreen = ({ route }) => {
  const { lesson } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.subtitle}>Teoria:</Text>
      <Text style={styles.content}>{lesson.theory}</Text>

      <Text style={styles.subtitle}>Exemplo de Código:</Text>
      <View style={styles.codeContainer}>
        <Text style={styles.code}>{lesson.code}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 15 },
  content: { fontSize: 16, marginTop: 10 },
  codeContainer: {
    backgroundColor: '#eaeaea',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  code: {
    fontFamily: 'monospace',
  },
});

export default LessonDetailScreen;
