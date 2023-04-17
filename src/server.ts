import express, { Request, Response, NextFunction } from 'express';
import { json, urlencoded } from 'body-parser';
import cookiepaser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import { errors } from 'celebrate';
import { pagination } from 'typeorm-pagination';

import Errors from './shared/errors/errors';
import AppError from './shared/errors/app-error';
import Routes from './routes';

class Server {
	public app: express.Application;

	constructor() {
		this.app = express();
		this.middleware();
		this.routes();
		this.initializeErrorHandling();
	}

	private middleware() {
		this.app.all('*', function (req: Request, res: Response, next: NextFunction) {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
			res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
			res.header('Content-Type', 'application/json;charset=utf-8');
			next();
		});

		this.app.use(cors());
		this.app.use(morgan('dev'));
		this.app.use(json());
		this.app.use(urlencoded({ extended: true }));
		this.app.use(cookiepaser());
		this.app.use(pagination);
	}

	private routes() {
		this.app.use('/v1', Routes);

		this.app.all('*', (req: Request, res: Response, next: NextFunction) => {
			res.status(404).json({
				status: '404',
				message: `Can' t find ${req.originalUrl} on this server!`,
			});
			next();
		});

		this.app.use(errors());
		this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
			if (err instanceof AppError) {
				return res.status(err.statusCode).json({
					status: 'error',
					message: err.message,
				});
			}

			return res.status(500).json({
				status: 'error',
				message: 'Internal server error',
			});
		});
	}

	private initializeErrorHandling() {
		this.app.use(Errors);
	}
}

export default new Server().app;
