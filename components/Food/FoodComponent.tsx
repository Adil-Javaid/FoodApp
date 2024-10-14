import { useState } from "react";
import { styles } from "./styles";
import { View, FlatList } from "react-native";
import FoodItem from "./FoodItem";
import { Food } from "@/assets/Interfaces/FoodInterface";
// import { useNavigation } from "@react-navigation/native";

interface FoodComponentsProps {
  readonly food: ReadonlyArray<Food>;
}

export default function FoodComponent({ food }: FoodComponentsProps) {
  const [like, setLike] = useState<{ [key: string]: boolean }>({});

  const selectLike = (itemId: string) => {
    setLike((prevLikedItems) => ({
      ...prevLikedItems,
      [itemId]: !prevLikedItems[itemId],
    }));
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={food}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <FoodItem
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            liked={!!like[item.id]}
            onLikedToggle={selectLike}
            // navigation={navigation}
          />
        )}
      />
    </View>
  );
}
