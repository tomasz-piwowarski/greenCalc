import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function Layout({
  children,
  onLayout,
}: {
  children: JSX.Element;
  onLayout: () => Promise<void>;
}) {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <LinearGradient colors={['rgba(98,152,64,255)', 'transparent']} style={styles.background} />
      {children}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
