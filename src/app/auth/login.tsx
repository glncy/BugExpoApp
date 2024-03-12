import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";

import { Text } from "@/src/components/reusables/ui/text";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View>
      <Pressable
        style={({ pressed }) => [{ backgroundColor: pressed ? "blue" : "red" }]}
        className="w-full p-5"
        onPress={() => router.push("/auth/signup")}
      >
        <Text className="text-center">Press me</Text>
      </Pressable>
    </View>
  );
}
