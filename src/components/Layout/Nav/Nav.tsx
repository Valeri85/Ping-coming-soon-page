import classes from './Nav.module.scss';
import Logo from '../../../assets/images/logo.svg';

export const Nav = () => (
	<nav className={classes.nav}>
		<a href="#">
			<img src={Logo} alt="ping" width="86" height="26" />
		</a>
	</nav>
);
