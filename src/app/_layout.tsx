import { AmaticSC_400Regular, AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";
import { Inter_700Bold, Inter_600SemiBold, Inter_400Regular , useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout () {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,
    InterSemi: Inter_600SemiBold,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold
  })

  useEffect(() => {
    if(fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if(!fontsLoaded && !fontError) {
    return null;
  }

  return <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: "DEVember" }} />
    </Stack>
  </GestureHandlerRootView>
}