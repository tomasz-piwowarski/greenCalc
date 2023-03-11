import { StyleSheet, Image } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';
import Logo from './Logo';

export default function LoadingScreen() {
  return (
    <Animated.View style={styles.container} exiting={FadeOut}>
      <Image
        source={require('../assets/tree.png')} //Nature Vectors by Vecteezy - https://www.vecteezy.com/free-vector/nature
        style={styles.img}
      />
      <Logo />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 300,
    shadowColor: '#3d5f27',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});
