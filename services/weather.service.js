// services/weather.service.js

import axios from "axios";

// export const getWeather = async (query) => {
// ð½ controllers ããå¥åãããç·¯åº¦çµåº¦ãåãåºã
export const getWeather = async ({ latitude, longitude }) => {
	console.log(latitude, longitude);
	try {
		// const url =	"https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FTokyo";
		// ð½ å¤©æ°APIã¸ã®ãªã¯ã¨ã¹ãURLã«ç·¯åº¦çµåº¦ãåãè¾¼ã
		const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FTokyo`;
		const weather = (await axios.get(url)).data;
		// return weather;
		// ð½ è¿½å 
		const weatherData = weather.daily;
		// console.log(weatherData);
		// return weatherData;
		// ð½ è¿½å 
		const keys = Object.keys(weatherData);
		// console.log(keys);
		// return keys;
		// // ð½ è¿½å 
		// const fantasticJson = [...new Array(7)];
		// // ð½ ç·¨é
		// const fantasticJson = [...new Array(7)].map((x, i) =>
		// 	keys.map((x) => [x, weatherData[x][i]])
		// );
		// ð½ ç·¨é
		const fantasticJson = [...new Array(7)].map((x, i) =>
			Object.fromEntries(keys.map((x) => [x, weatherData[x][i]]))
		);
		console.log(fantasticJson);
		return fantasticJson;
	} catch (e) {
		throw Error("Error while getting Weather.");
	}
};
