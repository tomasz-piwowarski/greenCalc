import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import Layout from './components/Layout';

export default function App() {
  const [loaded] = useFonts({
    'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Layout>
      <>
        <Image
          source={require('./assets/tree.png')} //Nature Vectors by Vecteezy - https://www.vecteezy.com/free-vector/nature
          style={styles.img}
        />
        <Text style={styles.logo}>greenCalc</Text>
        <StatusBar style="auto" />
      </>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 300,
  },
  logo: {
    fontFamily: 'Lobster-Regular',
    fontSize: 36,
    color: '#568638',
  },
});
