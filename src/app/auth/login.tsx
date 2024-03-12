import { useRouter } from "expo-router";
import { Pressable, View, Text } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "blue" : "red" },
          {
            width: "100%",
            padding: 30,
          },
        ]}
        onPress={() => router.push("/auth/signup")}
      >
        <Text
          style={{
            textAlign: "center",
          }}
        >
          Press me
        </Text>
      </Pressable>
    </View>
  );
}
