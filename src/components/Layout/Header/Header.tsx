import { FC } from 'react';

import { Nav } from '../Nav/Nav';
import { Form } from '../../Form/Form';

import classes from './Header.module.scss';

export const Header: FC = () => {
	return (
		<header className={classes.header}>
			<Nav />
			<h1>
				We are launching <strong>soon!</strong>
			</h1>
			<h2>Subscribe and get notified</h2>
			<Form />
		</header>
	);
};
