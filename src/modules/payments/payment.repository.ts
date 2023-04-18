import { EntityRepository, getRepository, Repository } from 'typeorm';
import Payment from './entities/payments.entities';

@EntityRepository(Payment)
class PaymentRepository extends Repository<Payment> {
	/**
	 * Create Payment
	 */
	public async created(payment: Payment): Promise<Payment> {
		const paymentRepository = getRepository(Payment);
		return paymentRepository.save(payment);
	}

	/**
	 * Find all machine
	 */
	public async findAll() {
		const payments = await this.find();
		return payments;
	}
}

export default PaymentRepository;
