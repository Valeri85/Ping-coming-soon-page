/* Importing the `FC` type from the `react` package. */
import { FC } from 'react';

/* Importing the Header, Main, and Footer components from the respective files. */
import { Header } from './components/Layout/Header/Header';
import { Main } from './components/Layout/Main/Main';
import { Footer } from './components/Layout/Footer/Footer';

/* Exporting the App component. */
export const App: FC = () => (
	<>
		<Header />
		<Main />
		<Footer />
	</>
);
