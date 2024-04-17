import HomePage from './components/HomePage/homepage';
import { ThemeProvider } from '@emotion/react';
import DarkTheme from './styles/theme';
import setupIcons from './styles/icon';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './components/resume/resume';
import SceneBackground from './components/SceneBackground/sceneBackground';
import { ScrollProvider } from './contexts/scrollContext';
import './App.scss';
import './index.scss';

function App() {
	setupIcons();

	return (
		<ThemeProvider theme={DarkTheme}>
			<ScrollProvider>
				<Router>
					<Routes>
						<Route path="/" element={<SceneBackground />}>
							<Route index element={<HomePage />} />
							<Route path="/resume" element={<Resume />} />
						</Route>
					</Routes>
				</Router>
			</ScrollProvider>
		</ThemeProvider>
	);
};

export default App;
