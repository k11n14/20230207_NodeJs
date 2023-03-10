import express from "express";
// ð½ è¿½å  ãã¿ããã®routerãèª­ã¿è¾¼ã
import { omikujiRouter } from "./routes/omikuji.route.js";
// ð½ è¿½å  ãããããã®ã«ã¼ãã£ã³ã°ãèª­ã¿è¾¼ã
import { jankenRouter } from "./routes/janken.route.js";
// ð½ è¿½å 
import { scrapingRouter } from "./routes/scraping.route.js";
// ð½ è¿½å 
import { weatherRouter } from "./routes/weather.route.js";
// ð½ è¿½å 
import { todayRouter } from "./routes/today.route.js";

const app = express();
// ð½ è¿½å  POSTã§ãã¼ã¿ãåãåãããã«å¿è¦
app.use(express.urlencoded({ extended: true }));
// ð½ è¿½å  JSONãã¼ã¿ãä½¿ç¨ããããã«å¿è¦
app.use(express.json());
// ð½ è¿½è¨
app.use("/", express.static("static"));

const port = 3001;

// ããããããããã¨ãã

// app.get("/", (req, res) => {
// 	res.send("Hello Node.js!");
// });

// ð½ ç·¨é
app.get("/", (req, res) => {
	// res.json()ã¸ã§ã¤ã½ã³ãã¼ã¿ã§è¿ãã¾ããï¼ï¼
	res.json({
		uri: "/",
		message: "Hello Node.js!",
	});
});

// // ð½ è¿½å 
// app.get("/omikuji", (req, res) => {
//   const kuji= ["å¤§å", "ä¸­å", "å°å", "å", "å¶", "æ«å", "å¤§å¶",];
//   const random = Math.floor(Math.random() * kuji.length);
//   // const kuji_result = kuji[random];
//   res.json({
// 		uri: "/omikuji",
// 		message: "This is Omikuji URI!",
// 		result: kuji[random],
// 	});
// });

// ð½ è¿½å  ãã¿ããã®ã«ã¼ãã£ã³ã°ãå¤æ´
app.use("/omikuji", (req, res) => omikujiRouter(req, res));

// // ð½ è¿½å 
// app.get("/janken", (req, res) => {
// 	res.json({
// 		uri: "/janken",
// 		message: "This is Janken URI!",
// 	});
// });

// ð½ è¿½å  ãããããã®ã«ã¼ãã£ã³ã°ãè¿½å 
app.use("/janken", (req, res) => jankenRouter(req, res));

// ð½ è¿½å 
app.use("/scraping", (req, res) => scrapingRouter(req, res));

// ð½ è¿½å 
app.use("/weather", (req, res) => weatherRouter(req, res));

// ð½ è¿½å 
app.use("/today", (req, res) => todayRouter(req, res));

// å®åæ
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
