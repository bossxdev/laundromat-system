import { EntityRepository, Repository } from 'typeorm';
import WashingMachines from './entities/washing-machines.entities';
import { CreateMachine, UpdateMachine } from '@modules/washing-machines/interfaces/washing-machines.interface';
import AppError from '../../shared/errors/app-error';
import httpStatus from 'http-status';
import { Status } from './enum/washing-machines.enum';

@EntityRepository(WashingMachines)
class WashingMachinesRepository extends Repository<WashingMachines> {
	/**
	 * Create User
	 * @param createMachineDto CreateMachine
	 */
	public async created(createMachineDto: CreateMachine) {
		const machine = this.create(createMachineDto);
		await this.save(machine);
		return machine;
	}

	/**
	 * Find all machine
	 */
	public async findAll() {
		const machines = await this.find();
		return machines;
	}

	/**
	 * Find available machine
	 */
	public async findAvail() {
		return this.find({ where: { status: Status.AVAILABLE } });
	}

	/**
	 * Get machine by id
	 * @param {machineId} id
	 * @returns {Promise<Machine>}
	 */
	public async getMachineById(id: number) {
		return this.findOne({ where: { id } });
	}

	/**
	 * Update status
	 * @param id machineId
	 * @param UpdateMachineDto status data
	 */
	public async updateMachineById(id: number, UpdateMachineDto: UpdateMachine) {
		const machine = await this.getMachineById(id);
		if (!machine) {
			throw new AppError(httpStatus.NOT_FOUND, 'Machine not found');
		}
		const updated = Object.assign(machine, UpdateMachineDto);
		await this.save(updated);
		return updated;
	}

	/**
	 * Delete machine by id
	 * @param {machineId} id
	 * @returns {Promise<Machine>}
	 */
	public async deleteMachineById(id: number) {
		const machine = await this.getMachineById(id);
		if (!machine) {
			throw new AppError(httpStatus.NOT_FOUND, 'Machine not found');
		}
		await this.remove(machine);
		return machine;
	}
}

export default WashingMachinesRepository;
