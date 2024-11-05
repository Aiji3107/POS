import { Stack } from "expo-router";

export default function BikeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Bike", headerShown:false }} />
    </Stack>
  );
}
