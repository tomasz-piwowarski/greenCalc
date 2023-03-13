import { FlatList, View, Text, StyleSheet } from 'react-native';
import HistoryBlock from './HistoryBlock';
import { rateValue } from '../utils';
import { ResultInStorage } from '../types';

export default function History({ results }: { results: ResultInStorage[] }) {
  if (!results.length) return <View style={styles.container}></View>;

  return (
    <FlatList
      data={results}
      renderItem={({ item }) => (
        <HistoryBlock date={item.date} value={item.value} rating={rateValue(item.value)} />
      )}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: '70%',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
});
