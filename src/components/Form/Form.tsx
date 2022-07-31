/* Importing the useState hook, the FC type, the FormEvent type, and the ChangeEvent type from the
React library. */
import { useState, FC, FormEvent, ChangeEvent } from 'react';

/* Importing the CSS module. */
import classes from './Form.module.scss';

/**
 * The function is a React functional component that returns a form with an input field and a submit
 * button.
 * @returns A form with a fieldset, label, input, p, and button.
 */
export const Form: FC = () => {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	/**
	 * If the entered email is not a valid email address, set the error message to 'Whoops! It looks like
	 * you forgot to add your email' or 'Please provide a valid email address' depending on whether the
	 * email field is empty or not.
	 * @param event - FormEvent<HTMLFormElement>
	 */
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const regex = /^([A-Za-z0-9\._]+)@([A-Za-z0-9]+)(\.[a-z]+)(\.[a-z]+)?$/;
		if (!regex.test(enteredEmail)) {
			setIsError(true);
			enteredEmail === ''
				? setErrorMessage(
						'Whoops! It looks like you forgot to add your email'
				  )
				: setErrorMessage('Please provide a valid email address');
		}
		if (regex.test(enteredEmail)) setIsError(false);
		setEnteredEmail('');
	};

	/**
	 * The handleChange function takes an event of type ChangeEvent, which is a React event that has a
	 * target of type HTMLInputElement, and returns the enteredEmail state, which is a string.
	 * @param event - ChangeEvent<HTMLInputElement>
	 */
	const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
		setEnteredEmail(event.target.value.trim());

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<fieldset className={classes.fieldset}>
				<label className={classes.label} htmlFor="email">
					Email:
				</label>
				<input
					className={`${classes.input} ${
						isError ? classes.error : ''
					}`}
					id="email"
					type="text"
					name="email"
					value={enteredEmail}
					onChange={handleChange}
					placeholder="Your email address..."
					aria-describedby="errorText"
				/>
			</fieldset>
			<p
				className={classes.errorText}
				id="errorText"
				aria-live="assertive"
			>
				<span>{isError && errorMessage}</span>
			</p>
			<button className={classes.button} type="submit">
				Notify Me
			</button>
		</form>
	);
};
