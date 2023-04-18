import { catchAsync } from '../../shared/utils/catchAsync';
import WashingMachinesService from './washing-machines.service';
import AppError from '../../shared/errors/app-error';
import httpStatus from 'http-status';

const createMachine = catchAsync(async (req, res) => {
	const machine = await WashingMachinesService.createMachine(req.body);
	res.status(httpStatus.CREATED).send(machine);
});

const getMachines = catchAsync(async (req, res) => {
	const machines = await WashingMachinesService.queryMachines();
	res.send(machines);
});

const getMachinesAvail = catchAsync(async (req, res) => {
	const machines = await WashingMachinesService.queryMachinesAvail();
	res.send(machines);
});

const getMachine = catchAsync(async (req, res) => {
	const machine = await WashingMachinesService.queryMachineById(req.params.machineId);
	if (!machine) {
		throw new AppError(httpStatus.NOT_FOUND, 'Machine not found');
	}
	res.send(machine);
});

const updateMachine = catchAsync(async (req, res) => {
	const machine = await WashingMachinesService.updateMachineById(req.params.machineId, req.body);
	res.send(machine);
});

const deleteMachine = catchAsync(async (req, res) => {
	await WashingMachinesService.deleteMachineById(req.params.machineId);
	res.status(httpStatus.NO_CONTENT).send();
});

export default { createMachine, getMachines, getMachinesAvail, getMachine, updateMachine, deleteMachine };
