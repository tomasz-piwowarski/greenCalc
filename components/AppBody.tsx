import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Form from './Form';
import AddNew from './AddNew';
import History from './History';
import { getResults, clearStorage } from '../utils/asyncStorage';
import { ResultInStorage } from '../types';

export default function AppBody() {
  const [results, setResults] = useState<ResultInStorage[]>([]);

  const handleResults = (newResult: ResultInStorage) => {
    setResults((prev) => [...prev, newResult]);
  };

  useEffect(() => {
    const getRes = async () => {
      setResults(await getResults('results'));
      await clearStorage();
    };

    getRes();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      {isModalVisible ? (
        <Form handleModal={handleModal} handleResults={handleResults} />
      ) : (
        <View>
          <AddNew handleModal={handleModal} />
          <History results={results} />
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
