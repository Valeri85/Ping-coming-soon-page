/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';

/* Importing the `SocialIcons` component from the `SocialIcons` folder. */
import { SocialIcons } from '../../SocialIcons/SocialIcons';

/* Importing the CSS file. */
import classes from './Footer.module.scss';

/**
 * It's a function that returns a footer element with a bunch of social icons.
 */
export const Footer: FC = () => (
	<footer className={classes.footer}>
		<SocialIcons />
		<p>&copy; Copyright Ping. All rights reserved.</p>
		<p>
			Challenge by
			<a
				className={classes.frontEndMentor}
				href="https://www.frontendmentor.io?ref=challenge"
				target="_blank"
				rel="noopener"
			>
				{' '}
				Frontend Mentor
			</a>
			.
		</p>
		<p>
			Coded by
			<a
				className={classes.frontEndMentor}
				href="https://www.frontendmentor.io/profile/Valeri85"
				target="_blank"
				rel="noopener"
			>
				{' '}
				Valeri
			</a>
			.
		</p>
	</footer>
);
