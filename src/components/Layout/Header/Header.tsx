/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';

/* Importing the Nav and Form components. */
import { Nav } from '../Nav/Nav';
import { Form } from '../../Form/Form';

/* Importing the CSS module. */
import classes from './Header.module.scss';

/**
 * The Header function is a React component that returns a header element with a Nav component, a main
 * title, a secondary title, and a Form component.
 * @returns A React component
 */
export const Header: FC = () => {
	return (
		<header className={classes.header}>
			<Nav />
			<h1 className={classes.mainTitle}>
				We are launching <strong>soon!</strong>
			</h1>
			<h2 className={classes.secondaryTitle}>
				Subscribe and get notified
			</h2>
			<Form />
		</header>
	);
};
