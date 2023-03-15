import { useCallback, useEffect, useState } from 'react';
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_300Light,
  Montserrat_500Medium,
} from '@expo-google-fonts/montserrat';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import AppBody from './components/AppBody';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [loaded] = useFonts({
    Montserrat_300Light,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!loaded) {
    return null;
  }

  return <Layout onLayout={onLayoutRootView}>{isLoading ? <LoadingScreen /> : <AppBody />}</Layout>;
}
