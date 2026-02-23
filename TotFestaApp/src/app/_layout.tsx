import { useFonts } from 'expo-font';
import { Slot } from "expo-router";
import { useEffect, useState } from 'react';
import SplashAnimation from '../components/SplashAnimation';
import { ThemeProvider } from '../providers/ThemeProvider';

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
    <ThemeProvider>
      {showSplash && ready &&
        (<SplashAnimation onFinish={() => setShowSplash(false)} />)
      }
      {!showSplash && (
        <Slot />
      )}
    </ThemeProvider>

  );
}
