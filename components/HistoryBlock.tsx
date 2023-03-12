import { View, Text, StyleSheet, Platform } from 'react-native';
import { Result } from '../types';

export default function HistoryBlock({ date, value, rating }: Result) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Date:</Text>
        <Text>
          {date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Text>
      </View>
      <View style={styles.inner}>
        <Text style={styles.title}>Your carbon footprint value:</Text>
        <Text>{value}</Text>
      </View>
      <Text style={[styles.title, styles.rating, styles.inner]}>{rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 18,
    padding: 10,
    borderColor: '#3d5f27',
    borderWidth: 1,
    shadowColor: '#3d5f27',
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  inner: {
    padding: 2,
  },
  title: {
    fontFamily: Platform.OS === 'android' ? 'Montserrat-Bold' : 'Montserrat',
    fontWeight: '700',
  },
  rating: {
    color: '#3d5f27',
    marginTop: 10,
  },
});
