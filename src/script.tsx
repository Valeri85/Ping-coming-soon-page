/* Importing the createRoot function from the react-dom/client module. */
import { createRoot } from 'react-dom/client';

/* Importing the App component from the App.tsx file. */
import { App } from './App';

/* Importing the global stylesheet for the application. */
import './assets/styles/style.scss';

/* Rendering the App component to the root div in the index.html file. */
createRoot(document.getElementById('root') as HTMLDivElement).render(<App />);
