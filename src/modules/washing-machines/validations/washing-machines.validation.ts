import Joi from 'joi';
import { Status } from '../enum/washing-machines.enum';

const createMachine = {
	body: Joi.object().keys({
		id: Joi.number().integer(),
		machine_number: Joi.string().required(),
	}),
};

const getMachines = {};

const getMachine = {
	params: Joi.object().keys({
		machineId: Joi.string(),
	}),
};

const updateMachine = {
	params: Joi.object().keys({
		machineId: Joi.required(),
	}),
	body: Joi.object()
		.keys({
			status: Joi.string().valid(...Object.values(Status)),
		})
		.min(1),
};

const deleteMachine = {
	params: Joi.object().keys({
		machineId: Joi.string(),
	}),
};

export default {
	createMachine,
	getMachines,
	getMachine,
	updateMachine,
	deleteMachine,
};
