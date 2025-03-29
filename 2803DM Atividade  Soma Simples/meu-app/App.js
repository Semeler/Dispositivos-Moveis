import React, { useState } from 'react'; import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => { const [num1, setNum1] = useState(''); const [num2, setNum2] = useState(''); const [resultado, setResultado] = useState(null);

const somar = () => { const numero1 = parseFloat(num1); const numero2 = parseFloat(num2);

if (!isNaN(numero1) && !isNaN(numero2)) {
  setResultado(numero1 + numero2);
} else {
  setResultado('Entrada inválida');
}

};

const limparCampos = () => { setNum1(''); setNum2(''); setResultado(null); };

return ( <View style={styles.container}> <Text style={styles.title}>Calculadora Retrô</Text>

<TextInput
    style={styles.input}
    placeholder="Número 1"
    keyboardType="numeric"
    value={num1}
    onChangeText={setNum1}
    placeholderTextColor="#fff"
  />

  <TextInput
    style={styles.input}
    placeholder="Número 2"
    keyboardType="numeric"
    value={num2}
    onChangeText={setNum2}
    placeholderTextColor="#fff"
  />

  <TouchableOpacity style={styles.button} onPress={somar}>
    <Text style={styles.buttonText}>Somar</Text>
  </TouchableOpacity>

  {resultado !== null && (
    <View style={styles.resultContainer}>
      <Text style={styles.resultLabel}>Resultado:</Text>
      <Text style={styles.resultValue}>{resultado}</Text>
    </View>
  )}

  <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={limparCampos}>
    <Text style={styles.buttonText}>Limpar</Text>
  </TouchableOpacity>
</View>

); };

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', padding: 20, }, title: { fontSize: 30, fontWeight: 'bold', color: '#0f0', fontFamily: 'Courier', marginBottom: 30, }, input: { width: '80%', height: 50, borderColor: '#0f0', borderWidth: 2, borderRadius: 0, marginVertical: 10, paddingHorizontal: 10, fontSize: 18, backgroundColor: '#111', color: '#0f0', fontFamily: 'Courier', }, button: { width: '80%', backgroundColor: '#0f0', padding: 12, borderRadius: 0, alignItems: 'center', marginTop: 20, }, clearButton: { backgroundColor: '#f00', }, buttonText: { fontSize: 18, color: '#000', fontWeight: 'bold', fontFamily: 'Courier', }, resultContainer: { flexDirection: 'row', marginTop: 25, alignItems: 'center', }, resultLabel: { fontSize: 20, color: '#0f0', fontFamily: 'Courier', marginRight: 10, }, resultValue: { fontSize: 24, color: '#0ff', fontFamily: 'Courier', fontWeight: 'bold', }, });

export default App;