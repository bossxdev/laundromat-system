import express from 'express';
import washingRoute from './washing-machines.route';
import paymentRoute from './payments.route';
import docsRoute from './docs.route';

import config from '../../config/environment.config';
const { env } = config;

const router = express.Router();

const defaultRoutes = [
	{
		path: '/washing-machines',
		route: washingRoute,
	},
	{
		path: '/payments',
		route: paymentRoute,
	},
];

const devRoutes = [
	// routes available only in development mode
	{
		path: '/docs',
		route: docsRoute,
	},
];

defaultRoutes.forEach(route => {
	router.use(route.path, route.route);
});

/* istanbul ignore next */
if (env === 'development') {
	devRoutes.forEach(route => {
		router.use(route.path, route.route);
	});
}

export default router;
