import request from 'request';
import config from '../../config/environment.config';
const { line_token } = config;

const urlLineNotification = 'https://notify-api.line.me/api/notify';

const sendLineNotification = () => {
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
				message: 'Test Message!',
			},
		},
		(error, response, body) => {
			error ? console.error(error) : console.log(body);
		},
	);
};

export default sendLineNotification;
