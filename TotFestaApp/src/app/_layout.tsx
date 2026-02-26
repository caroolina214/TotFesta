import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import { useEffect, useState } from 'react';
import SplashAnimation from '@/components/common/SplashAnimation';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AuthProvider } from '@/providers/AuthProvider';

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);

  const [fontsLoaded] = useFonts({
    Schibsted: require("../../assets/fonts/SchibstedGrotesk-Regular.ttf"),
    RobotoMono: require("../../assets/fonts/RobotoMono-Regular.ttf"),
    WenKai: require("../../assets/fonts/LXGWWenKaiMonoTC-Regular.ttf"),
  })

  useEffect(() => {
    async function loadData() {
      // Simulació de càrrega real
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setDataLoaded(true);
    }
    loadData();
  }, []);

  const ready = fontsLoaded && dataLoaded;


  return (
    <AuthProvider>
      <ThemeProvider>
        {showSplash && ready &&
          (<SplashAnimation onFinish={() => setShowSplash(false)} />)
        }
        {!showSplash && (
          // <Slot />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginPage" />
            <Stack.Screen name="(protected)" />
          </Stack>
        )}
      </ThemeProvider>
    </AuthProvider>
  );
}
