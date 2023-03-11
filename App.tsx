import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import AppBody from './components/AppBody';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [loaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
  });

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

  return <Layout>{isLoading ? <LoadingScreen /> : <AppBody />}</Layout>;
}
