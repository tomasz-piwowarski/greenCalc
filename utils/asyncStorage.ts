import AsyncStorage from '@react-native-async-storage/async-storage';
import { ResultInStorage } from '../types';

export const addNewResultToStorage = async (key: string, value: ResultInStorage) => {
	try {
		const results = await AsyncStorage.getItem(key)

		if(results) {
			const newResults = JSON.parse(results);

			newResults.push(value);

			await AsyncStorage.setItem(key, JSON.stringify(newResults));
		} else {
			const newResults = [value];

			await AsyncStorage.setItem(key, JSON.stringify(newResults));
		}

		return "calc has been saved!"
	} catch (error) {
		return error
	}
}

export const getResults = async (key: string) => {
	try {
		const results = await AsyncStorage.getItem(key);

		return results !== null ? JSON.parse(results) : [];
	} catch (error) {
		console.log(error)
	}
}

export const clearStorage = async () => {
	try {
		await AsyncStorage.clear();
	} catch (error) {
		console.log(error)
	}
}