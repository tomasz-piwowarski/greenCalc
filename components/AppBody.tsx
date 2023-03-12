import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Form from './Form';
import AddNew from './Form/AddNew';
import History from './History';

export default function AppBody() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      {isModalVisible ? (
        <Form handleModal={handleModal} />
      ) : (
        <View>
          <AddNew handleModal={handleModal} />
          <History />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    width: '90%',
    height: '100%',
    justifyContent: 'center',
  },
});
