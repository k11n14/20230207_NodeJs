// // services/janken.service.js

// export const getJanken = async (query) => {
// 	try {
// 		return { yourHand: query.myhand, comHand: "グー", result: "テスト中" };
// 	} catch (e) {
// 		throw Error("Error while getting Janken");
// 	}
// };

export const getJanken = async (query) => {
	try {
		const hand = ["グー", "チョキ", "パー"];
		const myIndex = hand.indexOf(query.myhand);
		if (myIndex === -1) return { message: "Invalid hand..." };
		const comIndex = Math.floor(Math.random() * 3);
		const resultSheet = [
			["Draw", "Win", "Lose"],
			["Lose", "Draw", "Win"],
			["Win", "Lose", "Draw"],
		];
		return {
			yourHand: query.myhand,
			comHand: hand[comIndex],
			result: resultSheet[myIndex][comIndex],
		};
	} catch (e) {
		throw Error("Error while getting Janken");
	}
};
