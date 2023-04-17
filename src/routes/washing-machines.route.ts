import express from 'express';
import validate from '../shared/middlewares/validate';
import washingMachinesValidation from '../modules/washing-machines/validations/washing-machines.validation';
import washingController from '../modules/washing-machines/washing-machines.controller';

const router = express.Router();

router
	.route('/machines')
	.post(validate(washingMachinesValidation.createMachine), washingController.createMachine)
	.get(validate(washingMachinesValidation.getMachines), washingController.getMachines);

router
	.route('/:machineId')
	.get(validate(washingMachinesValidation.getMachine), washingController.getMachine)
	.patch(validate(washingMachinesValidation.updateMachine), washingController.updateMachine)
	.delete(validate(washingMachinesValidation.deleteMachine), washingController.deleteMachine);

export default router;
