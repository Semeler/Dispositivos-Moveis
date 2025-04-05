import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Modal,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

// Dados dos cafés com tema Zelda
const coffeeData = [
  { id: '1', name: 'Espresso', origin: 'Hyrule' },
  { id: '2', name: 'Café Goron', origin: 'Montanhas da Morte' },
  { id: '3', name: 'Café Zora', origin: 'Domínio Zora' },
  { id: '4', name: 'Café Deku', origin: 'Floresta Kokiri' },
  { id: '5', name: 'Café Sheikah', origin: 'Aldeia Kakariko' },
  { id: '6', name: 'Café de Lon Lon', origin: 'Rancho Lon Lon' },
  { id: '7', name: 'Café Real', origin: 'Castelo de Hyrule' },
];

// Curiosidades de Hyrule
const hylianFacts = [
  'Link já bebeu poções energéticas feitas de grãos de café mágico!',
  'A Lon Lon Milk é rival do Café Real de Hyrule!',
  'O café Zora é servido gelado direto das águas sagradas.',
  'Dizem que o Rei de Hyrule só acorda com um Espresso Sheikah.',
  'As Deku Nuts são ótimas acompanhadas com um café quente!',
  'Zelda adora café com essência de Triforce ao amanhecer.',
  'Em Hyrule, o café substitui as fadas como item de cura em tempos modernos.',
];

export default function App() {
  const [search, setSearch] = useState('');
  const [filteredCoffees, setFilteredCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFilteredCoffees(coffeeData);
      setLoading(false);
    }, 1500);
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = coffeeData.filter(coffee =>
      coffee.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCoffees(filtered);
  };

  const showAlert = () => {
    const randomIndex = Math.floor(Math.random() * hylianFacts.length);
    const fact = hylianFacts[randomIndex];
    Alert.alert('🌿 Curiosidade Hylian', fact);
  };

  const handlePressCoffee = (coffee) => {
    setSelectedCoffee(coffee);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>🛡️ Cafeteria de Hyrule</Text>
        <Image source={require('./assets/coffee.png')} style={styles.image} />

        <TextInput
          style={styles.input}
          placeholder="🔍 Buscar café sagrado..."
          placeholderTextColor="#4e5b3a"
          value={search}
          onChangeText={handleSearch}
        />

        <TouchableOpacity style={styles.button} onPress={showAlert}>
          <Text style={styles.buttonText}>🌿 Curiosidade Hylian</Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator size="large" color="#4e5b3a" style={{ marginTop: 20 }} />
        ) : (
          <FlatList
            data={filteredCoffees}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress={() => handlePressCoffee(item)}>
                <Text style={styles.itemText}>{item.name} — {item.origin}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </ScrollView>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>☕ {selectedCoffee?.name}</Text>
            <Text style={styles.modalText}>Origem: {selectedCoffee?.origin}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Fechar Relíquia</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f1e6',
  },
  scrollContent: {
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 40,
  },
  listContainer: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'serif',
    color: '#3b3a30',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 25,
  },
  input: {
    borderColor: '#7a8b5b',
    borderWidth: 1,
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
    color: '#3e422f',
    backgroundColor: '#fbf9f1',
    fontFamily: 'serif',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6b8e23',
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fffbe0',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'serif',
  },
  item: {
    padding: 16,
    marginVertical: 6,
    backgroundColor: '#e0d4b7',
    borderRadius: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#a68a64',
  },
  itemText: {
    fontSize: 18,
    color: '#3c2f25',
    fontFamily: 'serif',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalBox: {
    marginHorizontal: 32,
    backgroundColor: '#fffaf0',
    padding: 35,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4b3e2a',
    fontFamily: 'serif',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 17,
    color: '#5e4b3b',
    fontFamily: 'serif',
    marginBottom: 25,
  },
  modalButton: {
    backgroundColor: '#6b8e23',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  modalButtonText: {
    color: '#fffbe0',
    fontSize: 16,
    fontFamily: 'serif',
  },
});
