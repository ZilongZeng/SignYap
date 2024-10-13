import { Stack } from "expo-router";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="camera/CameraView"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerTransparent: true,
          headerRight: () => (
            <TouchableOpacity>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="error/WIP"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerTintColor: "#3d2f20",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="learn/LearnScreen"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerTintColor: "#3d2f20",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="learn/SelectSignsScreen"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerTintColor: "#3d2f20",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="practice/PracticeScreen"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerTintColor: "#3d2f20",
          headerTransparent: true,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  skipButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default RootLayout;