import * as Font from "expo-font";
import { View } from 'react-native';
import StopWatch from './src/StopWatch';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import globalStyle from "./src/styles/globalStyle";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = Font.useFonts({
    'Digital-7': require('./assets/fonts/Digital-7.ttf'),
    'Digital-7 Mono': require('./assets/fonts/Digital-7 (mono).ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={globalStyle.container} onLayout={onLayoutRootView}>
        <StopWatch formatTimeMultiplier={10} />
    </View>
  );
}