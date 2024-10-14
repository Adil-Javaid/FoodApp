// app/FoodDetail.tsx

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const FoodDetail: React.FC = () => {
  const { id, name, price, image } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Image source={{ uri: image as string }} style={styles.image} />
      <Text style={styles.name}>{name as string}</Text>
      <Text style={styles.price}>{price} Rs</Text>
      <Text style={styles.id}>Food ID: {id}</Text>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: "#888",
    marginBottom: 10,
  },
  id: {
    fontSize: 16,
    color: "#555",
  },
});
