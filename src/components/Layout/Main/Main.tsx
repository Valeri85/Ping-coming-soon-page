import { FC } from 'react';

import classes from './Main.module.scss';
import DashboardImg from '../../../assets/images/illustration-dashboard.png';

export const Main: FC = () => (
	<main className={classes.main}>
		<img
			src={DashboardImg}
			alt="dashboard picture"
			width="1280"
			height="782"
		/>
	</main>
);
