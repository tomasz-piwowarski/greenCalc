export interface CalcData {
	electricBill: number,
	gasBill: number,
	oilBill: number,
	yearlyMileageCar: number,
	recycleNewspaper: boolean,
	recycleAluminumTin: boolean,
	flights: number
}

export interface Result {
	date: Date,
	value: number,
	rating: string
}