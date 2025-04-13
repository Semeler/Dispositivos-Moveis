import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const lessons = [
  {
    id: '1',
    title: 'O que é React Native',
    theory: 'React Native permite criar aplicativos móveis nativos usando JavaScript e React.',
    code: `import React from 'react';\nimport { Text } from 'react-native';\n\nexport default () => <Text>Olá, React Native!</Text>;`,
  },
  {
    id: '2',
    title: 'Componentes Básicos',
    theory: 'Principais componentes: View, Text, Button, etc.',
    code: `<View>\n  <Text>Componente Texto</Text>\n  <Button title="Pressione Aqui" />\n</View>`,
  },
  {
    id: '3',
    title: 'States e Props',
    theory: 'State controla os dados mutáveis e Props são propriedades passadas entre componentes.',
    code: `const [contador, setContador] = useState(0);\n\n<Button title={contador.toString()} onPress={() => setContador(contador + 1)} />`,
  },
  {
    id: '4',
    title: 'Estilização Simples',
    theory: 'Utilize StyleSheet para aplicar estilos aos componentes.',
    code: `const styles = StyleSheet.create({\n  texto: { fontSize: 20, color: 'blue' }\n});\n\n<Text style={styles.texto}>Texto estilizado</Text>`,
  },
];

const LessonsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={lessons}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.lesson}
          onPress={() => navigation.navigate('LessonDetail', { lesson: item })}
        >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
    <TouchableOpacity style={styles.demoButton} onPress={() => navigation.navigate('Demo')}>
      <Text style={styles.demoText}>Ir para Demonstração</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  lesson: { padding: 15, marginBottom: 10, backgroundColor: '#f0f0f0', borderRadius: 8 },
  title: { fontSize: 18 },
  demoButton: { padding: 15, backgroundColor: '#6200ee', borderRadius: 8, alignItems: 'center' },
  demoText: { color: '#fff', fontSize: 16 },
});

export default LessonsScreen;
