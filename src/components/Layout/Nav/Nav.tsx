/* Importing the FC type from the react package. */
import { FC } from 'react';

/* Importing the CSS module. */
import classes from './Nav.module.scss';
/* Importing the logo.svg file from the assets folder. */
import Logo from '../../../assets/images/logo.svg';

/**
 * This function is a React component that returns a nav element with a link to the homepage which contains logo inside.
 */
export const Nav: FC = () => (
	<nav className={classes.nav}>
		<a href="#" aria-label="Ping - Home">
			<img src={Logo} alt="Ping" width="86" height="26" />
		</a>
	</nav>
);
