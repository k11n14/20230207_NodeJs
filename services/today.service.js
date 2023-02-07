// services/today.service.js
// 🔽 追加
import { getWeather } from "./weather.service.js";
import { getCredo } from "./scraping.service.js";

export const getFantasticJsonData = async ({ latitude, longitude }) => {
	try {
		// 🔽 追加，編集
		const weatherData = (await getWeather({ latitude, longitude }))[0];
		const Nu = latitude - longitude;
		// console.log(Nu);
		const Nu2 = Nu % 6;
		const Nu3 = Math.abs(Nu2);
		const Nu4 = Math.floor(Nu3);
		// const credoAllData = (await getCredo());
		const Number = Nu4;
		const result_Number = Math.floor(Math.abs((latitude - longitude) % 7));
		const credoData = (await getCredo())[result_Number];
		return { weatherData, credoData, result_Number };
		// return { latitude, longitude };
	} catch (e) {
		throw Error("Error while getting JSON.");
	}
};
