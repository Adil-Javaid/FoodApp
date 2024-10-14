import { useState } from "react";
import { styles } from "./styles";
import { View, FlatList, RefreshControl } from "react-native";
import FoodItem from "./FoodItem";
import { Food } from "@/assets/Interfaces/FoodInterface";
// import { useNavigation } from "@react-navigation/native";

interface FoodComponentsProps {
  readonly food: ReadonlyArray<Food>;
}

export default function FoodComponent({ food }: FoodComponentsProps) {
  const [like, setLike] = useState<{ [key: string]: boolean }>({});
  const [foodList, setFoodList] = useState(food);
  const [refreshing, setRefreshing] = useState(false);

  const selectLike = (itemId: string) => {
    setLike((prevLikedItems) => ({
      ...prevLikedItems,
      [itemId]: !prevLikedItems[itemId],
    }));
  };

  const onRefresh = () =>{
    setRefreshing(true);

    const newFood = [
      {
        id: "5",
        name: "My Pizza",
        price: 12,
        image:
          "https://th.bing.com/th/id/OIP.IM6rhouRoIG64yp-mfU2TQHaHa?rs=1&pid=ImgDetMain",
      },
    ];

    setFoodList([...newFood, ...foodList]);

    setRefreshing(false)
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={foodList}
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }
      />
    </View>
  );
}
