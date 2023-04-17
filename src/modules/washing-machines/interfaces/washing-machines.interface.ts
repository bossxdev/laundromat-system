export interface Machine {
	id: number;
	machine_number: string;
	status: string;
	last_used_time: Date;
}

export interface CreateMachine {
	id: number;
	machine_number: string;
}

export interface UpdateMachine {
	status: string;
}
