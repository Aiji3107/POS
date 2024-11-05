import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import React from "react";
import Image1 from "@/components/img/Frame1.png";
import { useRouter } from "expo-router";

export default function CardCatalog() {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={Image1} style={styles.thumbnail} />
        <View style={styles.col}>
          <Text style={styles.title}>Tesla SuperX-200</Text>
          <Text style={styles.queue}>Queue: 0</Text>
          <View style={styles.row}>
            <Text style={styles.price}>$15/Hour</Text>
            <Pressable
              onPress={() => router.push("/(stacks)/newRental")}
              style={styles.button}
            >
                <Text style={styles.btntext}>Rent Now</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    width: 358,
    borderRadius: 8,
    padding: 10, // Add padding to give some space inside the card
  },
  row: {
    flexDirection: "row",
    alignItems: "center", // Center items vertically within the row
  },
  col: {
    marginLeft: 10, // Add space between the image and text
    justifyContent: "center", // Center items vertically within the column
  },
  thumbnail: {
    height: 98,
    width: 98,
    borderRadius: 8,
  },
  button: {
    marginLeft: 16,
    backgroundColor: "#17C6ED",
    width: 90,
    height: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "medium",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  queue: {
    fontSize: 14,
    fontWeight: "regular",
    marginBottom: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

