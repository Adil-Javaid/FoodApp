import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  foodItem: {
    marginBottom: 20,
    margin: 5,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 7,
    width: "47%",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    width: 100,
    textAlign: "center",
  },
  price: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
  },
  icon: {
    paddingLeft: 110,
  },
  button: {
    height: 45,
    width: 110,
    paddingHorizontal: 20,
    backgroundColor: "#ff0923",
    borderRadius: 25,
    margin: 10,
    elevation: 7,
  },
  buttonText: {
    margin: 5,
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
    color: "#fff",
  },
  buttonPressed: {
    backgroundColor: "#e6001a", // Darker shade on press for feedback
  },
});
