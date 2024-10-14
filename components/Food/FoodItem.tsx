// components/FoodItem.tsx

import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import CustomButton from "../CustomButton";
import { useRouter } from "expo-router";

interface FoodProps {
  id: string;
  name: string;
  price: number;
  image: string;
  liked: boolean;
  onLikedToggle: (id: string) => void;
}

const FoodItem: React.FC<FoodProps> = ({
  id,
  name,
  price,
  image,
  liked,
  onLikedToggle,
}) => {
  const router = useRouter();

  const detailScreen = () => {
    router.push({
      pathname: "/(FoodLinks)FoodDetail",
      params: { id, name, price, image },
    });
  };

  return (
    <View style={styles.foodItem}>
      <TouchableOpacity onPress={() => onLikedToggle(id)} style={styles.icon}>
        <Ionicons
          name={liked ? "heart" : "heart-outline"}
          size={25}
          color={liked ? "red" : "gray"}
        />
      </TouchableOpacity>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price} Rs</Text>
      <CustomButton title="View" onPress={detailScreen} />
    </View>
  );
};

export default FoodItem;
