/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';

/* Importing the styles from the Main.module.scss file. */
import classes from './Main.module.scss';
/* Importing the image from the assets folder. */
import DashboardImg from '../../../assets/images/illustration-dashboard.png';

/**
 * This function is a React component that returns a main element with a class name of main and an
 * image element.
 */
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
