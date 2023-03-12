import { FlatList } from 'react-native';
import HistoryBlock from './HistoryBlock';
import { rateValue } from '../utils';

const mockData = [
  { date: new Date(), value: 10000 },
  { date: new Date(), value: 15000 },
  { date: new Date(), value: 23000 },
  { date: new Date(), value: 21000 },
  { date: new Date(), value: 10000 },
  { date: new Date(), value: 36000 },
  { date: new Date(), value: 10000 },
  { date: new Date(), value: 15000 },
  { date: new Date(), value: 23000 },
  { date: new Date(), value: 21000 },
  { date: new Date(), value: 10000 },
  { date: new Date(), value: 36000 },
  { date: new Date(), value: 10000 },
  { date: new Date(), value: 15000 },
  { date: new Date(), value: 23000 },
  { date: new Date(), value: 21000 },
  { date: new Date(), value: 10000 },
  { date: new Date(), value: 36000 },
];

export default function History() {
  return (
    <FlatList
      data={mockData}
      renderItem={({ item }) => (
        <HistoryBlock date={item.date} value={item.value} rating={rateValue(item.value)} />
      )}
      style={{
        height: '70%',
        paddingHorizontal: 10,
        marginBottom: 30,
      }}
    />
  );
}
