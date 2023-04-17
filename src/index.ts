import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { createServer } from 'http';

import app from './server';
import config from './config/environment.config';
const { env, port } = config;

createConnection()
	.then(async () => {
		createServer(app).listen(port, () => {
			console.log(`🚀 Server is listening on port: ${port} 🚀`);
			console.log(`🚀 ENV: ${env}  🚀`);
		});
	})
	.catch(error => console.log(error));
