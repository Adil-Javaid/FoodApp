import { Food, Burgers, Salads, Sandwich } from "@/assets/Data/Product";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FoodComponent from "@/components/Food/FoodComponent";

type TabParamList = {
  Pizza: undefined;
  Burgers: undefined;
  Salads: undefined;
  Sandwich: undefined;
};

const Tab = createMaterialTopTabNavigator<TabParamList>();

export default function TabOneScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Pizza"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ccc",
        tabBarStyle: { backgroundColor: "#f32098" },
        tabBarIndicatorStyle: { backgroundColor: "#fff" },
        swipeEnabled: true,
        animationEnabled: true,
      }}
    >
      <Tab.Screen name="Pizza" options={{ tabBarLabel: "Pizza" }}>
        {() => <FoodComponent food={Food} />}
      </Tab.Screen>
      <Tab.Screen name="Burgers" options={{ tabBarLabel: "Burgers" }}>
        {() => <FoodComponent food={Burgers} />}
      </Tab.Screen>
      <Tab.Screen name="Salads" options={{ tabBarLabel: "Salads" }}>
        {() => <FoodComponent food={Salads} />}
      </Tab.Screen>
      <Tab.Screen name="Sandwich" options={{ tabBarLabel: "Sand wich" }}>
        {() => <FoodComponent food={Sandwich} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
