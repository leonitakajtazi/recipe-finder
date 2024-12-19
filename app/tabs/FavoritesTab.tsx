import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext'; // Make sure this is correctly set up

export default function FavoritesTab() {
  const { favorites } = useAppContext(); // Access favorites from the global context

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favorite Recipes</Text>
      {favorites.length === 0 ? (
        <Text>No favorites yet.</Text> // Display a message if no favorites exist
      ) : (
        <FlatList
          data={favorites} // Display the list of favorite recipes
          keyExtractor={(item) => item.id.toString()} // Unique key for each item
          renderItem={({ item }) => <Text>{item.title}</Text>} // Render each recipe title
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});
