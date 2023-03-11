import { View, StyleSheet } from 'react-native';

export default function FormLayout({ children }: { children: JSX.Element }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    marginVertical: 8,
  },
});
