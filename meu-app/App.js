import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar pokemon:', error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#facc15" />
        <Text>Carregando Pokémon...</Text>
      </View>
    );
  }

  if (!pokemon) {
    return (
      <View style={styles.centered}>
        <Text>Pokémon não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{pokemon.name.toUpperCase()}</Text>
      <Image
        source={{ uri: pokemon.sprites.front_default }}
        style={styles.image}
      />
      <Text style={styles.info}>Altura: {pokemon.height / 10} m</Text>
      <Text style={styles.info}>Peso: {pokemon.weight / 10} kg</Text>

      <Text style={styles.subtitle}>Tipos</Text>
      {pokemon.types.map((typeObj) => (
        <Text key={typeObj.slot} style={styles.detail}>
          - {typeObj.type.name}
        </Text>
      ))}

      <Text style={styles.subtitle}>Habilidades</Text>
      {pokemon.abilities.map((abilityObj, index) => (
        <Text key={index} style={styles.detail}>
          - {abilityObj.ability.name}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#facc15',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginVertical: 4,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    color: '#444',
  },
  detail: {
    fontSize: 16,
    color: '#555',
  },
});

export default Pokemon;
