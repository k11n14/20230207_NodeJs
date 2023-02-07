import express from "express";
// 🔽 追加 おみくじのrouterを読み込む
import { omikujiRouter } from "./routes/omikuji.route.js";
// 🔽 追加 じゃんけんのルーティングを読み込む
import { jankenRouter } from "./routes/janken.route.js";
// 🔽 追加
import { scrapingRouter } from "./routes/scraping.route.js";
// 🔽 追加
import { weatherRouter } from "./routes/weather.route.js";
// 🔽 追加
import { todayRouter } from "./routes/today.route.js";

const app = express();
// 🔽 追加 POSTでデータを受け取るために必要
app.use(express.urlencoded({ extended: true }));
// 🔽 追加 JSONデータを使用するために必要
app.use(express.json());
// 🔽 追記
app.use("/", express.static("static"));

const port = 3001;

// ここからをいじるところ

// app.get("/", (req, res) => {
// 	res.send("Hello Node.js!");
// });

// 🔽 編集
app.get("/", (req, res) => {
	// res.json()ジェイソンデータで返しますよ！！
	res.json({
		uri: "/",
		message: "Hello Node.js!",
	});
});

// // 🔽 追加
// app.get("/omikuji", (req, res) => {
//   const kuji= ["大吉", "中吉", "小吉", "吉", "凶", "末吉", "大凶",];
//   const random = Math.floor(Math.random() * kuji.length);
//   // const kuji_result = kuji[random];
//   res.json({
// 		uri: "/omikuji",
// 		message: "This is Omikuji URI!",
// 		result: kuji[random],
// 	});
// });

// 🔽 追加 おみくじのルーティングを変更
app.use("/omikuji", (req, res) => omikujiRouter(req, res));

// // 🔽 追加
// app.get("/janken", (req, res) => {
// 	res.json({
// 		uri: "/janken",
// 		message: "This is Janken URI!",
// 	});
// });

// 🔽 追加 じゃんけんのルーティングを追加
app.use("/janken", (req, res) => jankenRouter(req, res));

// 🔽 追加
app.use("/scraping", (req, res) => scrapingRouter(req, res));

// 🔽 追加
app.use("/weather", (req, res) => weatherRouter(req, res));

// 🔽 追加
app.use("/today", (req, res) => todayRouter(req, res));

// 定型文
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
