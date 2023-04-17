import { NextFunction, Request, Response } from 'express';
import AppError from './app-error';

export default function Errors(error: AppError, req: Request, res: Response, next: NextFunction) {
	const status = error['status'] || 500;
	const message = error.message || 'Something went wrong';
	res.status(status).json({
		status,
		message,
	});
}
