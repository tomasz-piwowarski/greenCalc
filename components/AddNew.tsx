import { View, Text, TouchableOpacity } from 'react-native';

export default function AddNew({ handleModal }: { handleModal: () => void }) {
  return (
    <View>
      <TouchableOpacity onPress={handleModal}>
        <Text>click me</Text>
      </TouchableOpacity>
    </View>
  );
}
