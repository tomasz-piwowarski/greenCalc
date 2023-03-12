import { View, TouchableOpacity } from 'react-native';
import HistoryBlock from '../HistoryBlock';
import { Entypo } from '@expo/vector-icons';

export default function AddNew({ handleModal }: { handleModal: () => void }) {
  return (
    <View style={{ marginBottom: 20 }}>
      <TouchableOpacity onPress={handleModal}>
        <HistoryBlock date={new Date()} value={0} rating="Calculate your carbon footprint!" />
        <Entypo
          name="add-to-list"
          size={24}
          color="black"
          style={{ position: 'absolute', right: 15, top: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
}
