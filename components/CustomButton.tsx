// components/CustomButton.tsx
import React from "react";
import { Text, Pressable, GestureResponderEvent } from "react-native";
import { styles } from "../components/Food/styles";

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object; // Optional additional styling
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        style, // Allows overriding or extending styles
      ]}
      android_ripple={{ color: "#ffffff20" }} // Ripple effect for Android
      accessibilityRole="button"
      accessibilityLabel={title}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
