// services/weather.service.js

import axios from "axios";

// export const getWeather = async (query) => {
// 🔽 controllers から入力された緯度経度を取り出す
export const getWeather = async ({ latitude, longitude }) => {
	console.log(latitude, longitude);
	try {
		// const url =	"https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FTokyo";
		// 🔽 天気APIへのリクエストURLに緯度経度を埋め込む
		const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FTokyo`;
		const weather = (await axios.get(url)).data;
		// return weather;
		// 🔽 追加
		const weatherData = weather.daily;
		// console.log(weatherData);
		// return weatherData;
		// 🔽 追加
		const keys = Object.keys(weatherData);
		// console.log(keys);
		// return keys;
		// // 🔽 追加
		// const fantasticJson = [...new Array(7)];
		// // 🔽 編集
		// const fantasticJson = [...new Array(7)].map((x, i) =>
		// 	keys.map((x) => [x, weatherData[x][i]])
		// );
		// 🔽 編集
		const fantasticJson = [...new Array(7)].map((x, i) =>
			Object.fromEntries(keys.map((x) => [x, weatherData[x][i]]))
		);
		console.log(fantasticJson);
		return fantasticJson;
	} catch (e) {
		throw Error("Error while getting Weather.");
	}
};
