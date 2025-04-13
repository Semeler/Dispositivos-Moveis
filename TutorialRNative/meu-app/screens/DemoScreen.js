import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DemoScreen = () => {
  const [textColor, setTextColor] = useState('blue');

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: textColor }]}>
        Cor atual do texto: {textColor}
      </Text>
      <Button
        title="Mudar Cor"
        onPress={() => setTextColor(textColor === 'blue' ? 'red' : 'blue')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
});

export default DemoScreen;
