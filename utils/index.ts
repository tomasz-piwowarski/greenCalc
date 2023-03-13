import { CalcData } from "../types";

export function calcCarbonFootprint (data: CalcData) {
	const {
		electricBill,
		gasBill,
		oilBill,
		yearlyMileageCar,
		recycleNewspaper,
		recycleAluminumTin,
	} = data;

	const flights =
		data.flights <= 4 && data.flights > 0 ? data.flights * 1100 : data.flights * 4400;

	const result =
		electricBill * 105 +
		gasBill * 105 +
		oilBill * 113 +
		yearlyMileageCar * 0.79 +
		flights +
		Number(recycleNewspaper) * 184 +
		Number(recycleAluminumTin) * 166;

		return Math.ceil(result);
}

export function rateValue (value: number): string {
	if(value < 16000 && value > 0) return "It's ideal! Great job!"
	else if (value >= 16000 && value < 22000) return "It's okay, but we know that you can do better!"
	else return "Disgusting."
}