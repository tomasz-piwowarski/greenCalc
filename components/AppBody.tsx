import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Form from './Form';
import AddNew from './AddNew';

export default function AppBody() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      {isModalVisible ? <Form handleModal={handleModal} /> : <AddNew handleModal={handleModal} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'center',
  },
});
