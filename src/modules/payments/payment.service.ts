import PaymentRepository from './payment.repository';
import Payment from './entities/payments.entities';
import { getCustomRepository } from 'typeorm';

class PaymentService {
	/**
	 * Create a payment
	 * @returns {Promise<Payment>}
	 */
	public async createPayment(id: number, payment_amount: number, washing_machine_id: number): Promise<Payment> {
		const payment = new Payment(id, payment_amount, washing_machine_id);
		return getCustomRepository(PaymentRepository).created(payment);
	}

	/**
	 * Find all machine
	 */
	public async queryPayments() {
		return await getCustomRepository(PaymentRepository).findAll();
	}
}

export default new PaymentService();
