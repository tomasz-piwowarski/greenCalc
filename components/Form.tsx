import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AntDesign } from '@expo/vector-icons';
import Animated, { SlideOutDown, SlideInDown } from 'react-native-reanimated';
import { useForm } from 'react-hook-form';
import Input from './Input';
import Checkbox from './Checkbox';
import Logo from './Logo';
import Button from './Button';

export default function Form({ handleModal }: { handleModal: () => void }) {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const {
      electricBill,
      gasBill,
      oilBill,
      yearlyMileageCar,
      recycleNewspaper,
      recycleAluminumTin,
    } = data;

    const flights =
      data.flights <= 4 && data.flights > 0
        ? parseInt(data.flights) * 1100
        : parseInt(data.flights) * 4400;

    const result =
      parseInt(electricBill) * 105 +
      parseInt(gasBill) * 105 +
      parseInt(oilBill) * 113 +
      parseInt(yearlyMileageCar) * 0.79 +
      flights +
      recycleNewspaper * 184 +
      recycleAluminumTin * 166;
    console.log(result);
  };

  return (
    <KeyboardAwareScrollView>
      <Animated.View entering={SlideInDown} exiting={SlideOutDown} style={styles.container}>
        <View style={styles.header}>
          <Logo />
          <AntDesign name="close" size={24} color="black" onPress={handleModal} />
        </View>
        <View style={styles.divider} />
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
    backgroundColor: '#ffffff',
    borderRadius: 18,
  },
  header: {
    padding: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 4,
  },
});
