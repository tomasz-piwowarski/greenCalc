import ExpoCheckbox from 'expo-checkbox';
import { useController } from 'react-hook-form';
import { StyleSheet, Text, Platform } from 'react-native';
import CheckboxLayout from './CheckboxLayout';

export default function Checkbox({ control, defaultValue, name, text }: any) {
  const { field } = useController({ control, defaultValue, name });

  return (
    <CheckboxLayout>
      <>
        <Text style={styles.text}>{text}</Text>
        <ExpoCheckbox value={field.value} onValueChange={field.onChange} style={styles.input} />
      </>
    </CheckboxLayout>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  input: {
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    fontFamily: Platform.OS === 'android' ? 'Montserrat-Medium' : 'Montserrat',
    fontWeight: '500',
    fontSize: 16,
    marginRight: 8,
  },
});
