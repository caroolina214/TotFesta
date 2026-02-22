import { useEffect, useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import LoginPage from './src/app/LoginPage';
import { darkTheme, lightTheme } from './src/theme/appTheme';
import { useFonts } from 'expo-font';
import SplashAnimation from './src/components/SplashAnimation';

export default function TotFestaApp() {
  const [isDark, setIsDark] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);


  const [fontsLoaded] = useFonts({
    Schibsted: require("./assets/fonts/SchibstedGrotesk-Regular.ttf"),
    RobotoMono: require("./assets/fonts/RobotoMono-Regular.ttf"),
    WenKai: require("./assets/fonts/LXGWWenKaiMonoTC-Regular.ttf"),
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
    <PaperProvider theme={isDark ? darkTheme : lightTheme}>
      {showSplash && ready &&
        (<SplashAnimation onFinish={() => setShowSplash(false)} />)
      }
      {!showSplash && (
        <LoginPage toggleTheme={() => setIsDark(!isDark)} />
      )}
    </PaperProvider>

  );
}
