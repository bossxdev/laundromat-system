import express from 'express';
import validate from '../shared/middlewares/validate';
import paymentValidation from '../modules/payments/validations/payment.validation';
import paymentController from '../modules/payments/payment.controller';

const router = express.Router();

router
	.route('/')
	.post(validate(paymentValidation.createPayment), paymentController.createPayment)
	.get(validate(paymentValidation.getPayment), paymentController.getPayment);

export default router;
