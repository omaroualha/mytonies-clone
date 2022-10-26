import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { fonts } from "@/assets/fonts/index";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [fontsLoaded] = Font.useFonts({
    "Museo-100": fonts.Museo_100,
    "Museo-300": fonts.Museo_300,
    "Museo-500": fonts.Museo_500,
    "Museo-700": fonts.Museo_700,
    "Museo-900": fonts.Museo_900,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      setLoadingComplete(true);
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return isLoadingComplete;
}
