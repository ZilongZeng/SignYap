import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="learn/LearnScreen"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerTintColor: '#3d2f20',
          headerTransparent: true,
        }}
      />
      <Stack.Screen 
        name="practice/PracticeScreen" 
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerTintColor: '#3d2f20',
          headerTransparent: true,
        }}
      />
      {/* Add the new SelectSignsScreen here */}
      <Stack.Screen 
        name="learn/SelectSignsScreen"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerTintColor: '#3d2f20',
          headerTransparent: true,
        }}
      />
    </Stack>
  );
}

export default RootLayout;