import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Mengatur konten mulai dari kiri
    borderRadius: 8,
    backgroundColor: "#EBEDED",
    width: 358,
    height: 36,
    paddingHorizontal: 10, // Padding di kiri dan kanan
  },
  pickerInput: {
    marginTop: 10,
    width: 200,
  },
});
