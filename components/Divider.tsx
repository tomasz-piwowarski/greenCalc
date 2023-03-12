import { View, StyleSheet } from 'react-native';

export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 4,
  },
});
