import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
	<h1>
		React with Typescript Project!!
	</h1>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
