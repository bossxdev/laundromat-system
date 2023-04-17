import { getCustomRepository } from 'typeorm';

import WashingMachinesRepository from './washing-machines.repository';
import { CreateMachine, Machine, UpdateMachine } from './interfaces/washing-machines.interface';

class WashingMachinesService {
	/**
	 * Create a user
	 * @param {Object} createUserDto
	 * @returns {Promise<Machine>}
	 */
	public async createMachine(createUserDto: CreateMachine): Promise<Machine> {
		return await getCustomRepository(WashingMachinesRepository).created(createUserDto);
	}

	/**
	 * Find all machine
	 */
	public async queryMachines() {
		return await getCustomRepository(WashingMachinesRepository).findAll();
	}

	/**
	 * Find Washing machine by id
	 * @param id machineId
	 */
	public async queryMachineById(id: number): Promise<Machine | undefined> {
		return await getCustomRepository(WashingMachinesRepository).getMachineById(id);
	}

	/**
	 * Update status by id
	 * @param {machineId} id
	 * @param {Object} updateMachineDto
	 */
	public async updateMachineById(id: number, updateMachineDto: UpdateMachine): Promise<Machine> {
		return await getCustomRepository(WashingMachinesRepository).updateMachineById(id, updateMachineDto);
	}

	/**
	 * Delete machine by id
	 * @param {machineId} id
	 * @returns {Promise<Machine>}
	 */
	public async deleteMachineById(id: number): Promise<Machine> {
		return await getCustomRepository(WashingMachinesRepository).deleteMachineById(id);
	}
}

export default new WashingMachinesService();
