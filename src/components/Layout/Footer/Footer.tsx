import { FC } from 'react';

import { SocialIcons } from '../../SocialIcons/SocialIcons';

import classes from './Footer.module.scss';

export const Footer: FC = () => (
	<footer className={classes.footer}>
		<SocialIcons />
		<p>&copy; Copyright Ping. All rights reserved.</p>
		<p>
			Challenge by
			<a
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
