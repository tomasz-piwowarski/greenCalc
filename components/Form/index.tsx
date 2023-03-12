import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AntDesign } from '@expo/vector-icons';
import Animated, { SlideOutDown, SlideInDown } from 'react-native-reanimated';
import { useForm } from 'react-hook-form';
import Input from './Input';
import Checkbox from './Checkbox';
import Logo from '../Logo';
import Button from '../Button';
import Divider from '../Divider';
import { CalcData } from '../../types';
import { calcCarbonFootprint } from '../../utils';

export default function Form({ handleModal }: { handleModal: () => void }) {
  const { control, handleSubmit } = useForm<CalcData>();

  const onSubmit = (data: CalcData) => {
    const result = calcCarbonFootprint(data);
    console.log(result);
  };

  return (
    <KeyboardAwareScrollView>
      <Animated.View entering={SlideInDown} style={styles.container}>
        <View style={styles.header}>
          <Logo />
          <AntDesign name="close" size={24} color="black" onPress={handleModal} />
        </View>
        <Divider />
        <Input
          name="electricBill"
          defaultValue=""
          control={control}
          text="Monthly electric bill in USD:"
        />
        <Input name="gasBill" defaultValue="" control={control} text="Monthly gas bill in USD:" />
        <Input name="oilBill" defaultValue="" control={control} text="Monthly oil bill in USD:" />
        <Input
          name="yearlyMileageCar"
          defaultValue=""
          control={control}
          text="Total yearly mileage on your car:"
        />
        <Input
          name="flights"
          defaultValue=""
          control={control}
          text="Flights you've taken in the past year:"
        />
        <Checkbox
          name="recycleNewspaper"
          defaultValue=""
          control={control}
          text="Do you recycle newspaper?"
        />
        <Checkbox
          name="recycleAluminumTin"
          defaultValue=""
          control={control}
          text="Do you recycle aluminum and tin?"
        />
        <View style={{ alignItems: 'center', marginTop: 4 }}>
          <Button title="Calc" onPress={handleSubmit(onSubmit)} />
        </View>
      </Animated.View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    height: '100%',
  },
  header: {
    padding: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
  },
});
