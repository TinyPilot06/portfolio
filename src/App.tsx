import HomePage from './components/HomePage/homepage';
import { ThemeProvider } from '@emotion/react';
import DarkTheme from './styles/theme';
import './App.scss';
import './index.scss';
import setupIcons from './styles/icon';
import ThreeJs from './components/scene/ThreeJs';
import { useRef } from 'react';

function App() {
	setupIcons();
	const homepageRef = useRef<HTMLDivElement>(null);

	return (
		<ThemeProvider theme={DarkTheme}>
			<ThreeJs homepage={homepageRef} />
			<HomePage ref={homepageRef} />
		</ThemeProvider>
	);
};

export default App;
