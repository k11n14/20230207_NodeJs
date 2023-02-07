// controllers/weather.controller.js

import { getWeather } from "../services/weather.service.js";

export const getResult = async (req, res, next) => {
	// 🔽 GETで送信されたデータを受け取る
	console.log(req.query);
	// 🔽 緯度経度を取り出す（データがない場合には東京の値を設定）
	const latitude = Number(req.query.latitude ?? 35.6785);
	const longitude = Number(req.query.longitude ?? 139.6823);
	try {
		// const result = await getWeather();
		// 🔽 緯度経度をサービスの関数に入力する（分割代入を使用）
		const result = await getWeather({ latitude, longitude });
		return res.status(200).json({
			status: 200,
			data: result,
			message: "Successfully get Weather!",
		});
	} catch (e) {
		return res.status(500).json({ status: 500, message: e.message });
	}
};
