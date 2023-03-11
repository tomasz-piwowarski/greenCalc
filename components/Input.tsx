import { useController } from 'react-hook-form';
import { TextInput, StyleSheet, Text, Platform } from 'react-native';
import InputLayout from './InputLayout';

export default function Input({ control, defaultValue, name, text }: any) {
  const { field } = useController({ control, defaultValue, name });

  return (
    <InputLayout>
      <>
        <Text style={styles.text}>{text}</Text>
        <TextInput value={field.value} onChangeText={field.onChange} style={styles.input} />
      </>
    </InputLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === 'android' ? 'Montserrat-Medium' : 'Montserrat',
    fontWeight: '500',
    fontSize: 16,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderColor: '#5c943ab7',
    borderWidth: 1,
    borderRadius: 5,
    color: '#1f1f1f',
  },
});
