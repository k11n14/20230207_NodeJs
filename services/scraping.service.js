// services/scraping.service.js
import axios from "axios";

export const getCredo = async (query) => {
	try {
		// return { message: "ok" };
		const url = "https://gsacademy.jp/about/";
		const html = (await axios.get(url)).data;
		// return html;
		// 🔽 追加
		const minimizedHtml = html.replaceAll(/\n|\r|\t/g, "");
		// return minimizedHtml;
		// 🔽 追加
		// const textJa = minimizedHtml.match(
		// 	/(?<=<h4 class="system-credo__list-item-title">)[\s\S]+?(?=<\/h4>)/g
		// );
		const textJa = minimizedHtml
			.match(
				/(?<=<h4 class="system-credo__list-item-title">)[\s\S]+?(?=<\/h4>)/g
			)
			.map((x) => x.trim().replaceAll(/[' ', '<br>']/g, ""));
		// return textJa;

		// 🔽 追加
		// const imgUrl = minimizedHtml.match(
		// 	/\/assets\/images\/item\/credo_0[1234567]\.png/g
		// );
		// 🔽 編集
		const imgUrl = minimizedHtml
			.match(/\/assets\/images\/item\/credo_0[1234567]\.png/g)
			.map((x) => `https://gsacademy.jp${x}`);
		// return imgUrl;

		// 🔽 追加
		const credoJson = [...new Array(7)].map((x, i) => ({
			credo_no: i + 1,
			text_ja: textJa[i],
			img_url: imgUrl[i],
		}));

		return credoJson;
	} catch (e) {
		throw Error("Error while getting HTML.");
	}
};
