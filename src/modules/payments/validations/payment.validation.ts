import Joi from 'joi';

const createPayment = {
	body: Joi.object().keys({
		id: Joi.number().integer(),
		payment_amount: Joi.number().integer(),
		washing_machine_id: Joi.number().integer(),
	}),
};

const getPayment = {};

export default {
	createPayment,
	getPayment,
};
