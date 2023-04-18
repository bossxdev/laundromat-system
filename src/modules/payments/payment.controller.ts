import PaymentService from './payment.service';
import { catchAsync } from '../../shared/utils/catchAsync';

const createPayment = catchAsync(async (req, res) => {
	try {
		const { id, payment_amount, washing_machine_id } = req.body;
		const payment = await PaymentService.createPayment(id, payment_amount, washing_machine_id);
		res.status(200).json(payment);
	} catch (error) {
		res.status(500).json(error);
	}
});

const getPayment = catchAsync(async (req, res) => {
	const payments = await PaymentService.queryPayments();
	res.send(payments);
});

export default { createPayment, getPayment };
