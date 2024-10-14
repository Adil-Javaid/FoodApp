import FoodDetail from "@/app/(FoodLinks)/FoodDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function AllScreen(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Screen 
            name= 'Detail Screen' component={FoodDetail}
            />
        </NavigationContainer>
    )
}