import { getJanken } from "../services/janken.service.js";

export const getResult = async (req, res, next) => {
	try {
		// getJanken(req.body)のreq.bodyに相手の手のデータが入っている。
		const result = await getJanken(req.body);
		console.log(req.body);
		return res.status(200).json({
			status: 200,
			result: result,
			message: "successfully get Janken!",
		});
	} catch (e) {
		return res.status(500).json({ status: 500, message: e.message });
	}
};
