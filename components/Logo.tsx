import { StyleSheet, Text, View, Platform } from 'react-native';

export default function Logo() {
  return (
    <View>
      <Text>
        <Text style={styles.logoFirstPart}>green</Text>
        <Text style={styles.logoSecondPart}>Calc</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoFirstPart: {
    fontFamily: Platform.OS === 'android' ? 'Montserrat-Light' : 'Montserrat',
    fontWeight: '300',
    fontSize: 36,
    color: '#568638',
    shadowColor: '#3d5f27',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  logoSecondPart: {
    fontFamily: Platform.OS === 'android' ? 'Montserrat-Bold' : 'Montserrat',
    fontWeight: '700',
    fontSize: 36,
    color: '#568638',
    shadowColor: '#3d5f27',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
