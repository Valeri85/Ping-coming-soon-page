import { FC } from 'react';

import classes from './Main.module.scss';
import DashboardImg from '../../../assets/images/illustration-dashboard.png';

export const Main: FC = () => (
	<main className={classes.main}>
		<img
			src={DashboardImg}
			width="1280"
			height="782"
			alt="dashboard picture"
		/>
	</main>
);
