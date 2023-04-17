import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import WashingMachines from '../../washing-machines/entities/washing-machines.entities';

@Entity('payments')
class Payments {
	@PrimaryGeneratedColumn({ name: 'payments_id' })
	id: number;

	@Column({ type: 'decimal', precision: 10, scale: 2 })
	payment_amount: number;

	@CreateDateColumn()
	last_used_time: Date;

	@OneToOne(() => WashingMachines)
	@JoinColumn({ name: 'washing_machine_id' })
	washing_machine_id: number;
}

export default Payments;
