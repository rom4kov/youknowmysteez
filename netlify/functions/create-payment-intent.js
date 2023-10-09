require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
	try {
		console.log("event object:", event.body);
		const { amount } = JSON.parse(event.body);

		console.log("amount:", amount);

		const paymentIntent = await stripe.paymentIntents.create({
			amount: amount ? amount : 12300,
			currency: "eur",
			payment_method_types: ["giropay", "card", "klarna", "paypal"],
		});

		console.log(paymentIntent.amount);

		return {
			statusCode: 200,
			body: JSON.stringify({ paymentIntent }),
		};
	} catch (error) {
		console.log({ error });

		return {
			statusCode: 400,
			body: JSON.stringify({ error }),
		};
	}
};
