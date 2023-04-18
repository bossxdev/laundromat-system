import request from 'request';
import config from '../../config/environment.config';
import WashingMachinesService from '../../modules/washing-machines/washing-machines.service';
const { line_token } = config;

const urlLineNotification = 'https://notify-api.line.me/api/notify';

const sendLineNotification = async () => {
	const machines = await WashingMachinesService.queryMachinesAvail();
	request.post(
		{
			url: urlLineNotification,
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			auth: {
				bearer: line_token,
			},
			form: {
				message: `จำนวนเครื่องซักผ้าที่พร้อมใช้งาน เท่ากับ ${machines.length} เครื่อง`,
			},
		},
		(error, response, body) => {
			error ? console.error(error) : console.log(body);
		},
	);
};

export default sendLineNotification;
