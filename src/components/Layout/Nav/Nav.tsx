import classes from './Nav.module.scss';
import Logo from '../../../assets/images/logo.svg';

export const Nav = () => (
	<nav className={classes.nav}>
		<a href="#" aria-label="Ping - Home">
			<img src={Logo} alt="Ping" width="86" height="26" />
		</a>
	</nav>
);
