// services/omikuji.service.js

export const getOmikuji = async (query) => {
	try {
		// const omikuji = ["大吉", "中吉", "小吉", "凶", "大凶"];
		// const min = 0;
		// const max = omikuji.length - 1;
		// const index = Math.floor(Math.random() * (max - min + 1)) + min;
		// return { result: omikuji[index] };
		  const kuji= ["大吉", "中吉", "小吉", "吉", "凶", "末吉", "大凶",];
		  const random = Math.floor(Math.random() * kuji.length);
    const kuji_result = kuji[random];
    return { result: kuji_result };
	} catch (e) {
		throw Error("Error while getting Omikuji.");
	}
};
