import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from '../enum/washing-machines.enum';

@Entity('washing_machines')
class WashingMachines {
	@PrimaryGeneratedColumn({ name: 'washing_machine_id' })
	id: number;

	@Column({ length: 11 })
	machine_number: string;

	@Column({
		type: 'enum',
		enum: Status,
		default: Status.AVAILABLE,
	})
	status: Status;

	@CreateDateColumn()
	last_used_time: Date;
}

export default WashingMachines;
