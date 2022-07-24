import { useState, FC, FormEvent, ChangeEvent } from 'react';

import classes from './Form.module.scss';

export const Form: FC = () => {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const regex = /^([A-Za-z0-9\._]+)@([A-Za-z0-9]+)(\.[a-z]+)(\.[a-z]+)?$/;
		if (!regex.test(enteredEmail)) {
			setIsError(true);
			enteredEmail === ''
				? setErrorMessage(
						'Whoops! It looks like you forgot to add your email'
				  )
				: setErrorMessage('Please provide a valid email adress');
		}
		setEnteredEmail('');
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
		setEnteredEmail(event.target.value.trim());

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<fieldset>
				<label htmlFor="email">Email:</label>
				<input
					className={isError ? classes.error : ''}
					id="email"
					type="text"
					name="email"
					value={enteredEmail}
					onChange={handleChange}
					placeholder="Your email address..."
				/>
			</fieldset>
			{isError && (
				<p role="alert" aria-live="assertive">
					<em>{errorMessage}</em>
				</p>
			)}
			<button>Notify Me</button>
		</form>
	);
};
