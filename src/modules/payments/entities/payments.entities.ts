import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import WashingMachines from '../../washing-machines/entities/washing-machines.entities';

@Entity('payments')
class Payments {
	@PrimaryGeneratedColumn({ name: 'payments_id' })
	id: number;

	@Column({ type: 'decimal', precision: 10, scale: 2 })
	payment_amount: number;

	@CreateDateColumn()
	last_used_time: Date;

	@ManyToOne(() => WashingMachines, { nullable: false, eager: true })
	@JoinColumn({ name: 'washing_machine_id' })
	washing_machine_id: number;

	constructor(id: number, payment_amount: number, washing_machine_id: number) {
		this.id = id;
		this.payment_amount = payment_amount;
		this.last_used_time = new Date();
		this.washing_machine_id = washing_machine_id;
	}
}

export default Payments;
