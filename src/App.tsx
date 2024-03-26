import HomePage from './components/HomePage/homepage';
import { ThemeProvider } from '@emotion/react';
import DarkTheme from './styles/theme';
import './App.scss';
import './index.scss';
import setupIcons from './styles/icon';
import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './components/resume/resume';
import SceneBackground from './components/SceneBackground/sceneBackground';

function App() {
	setupIcons();
	const scrollRef = useRef<HTMLDivElement>(null);

	return (
		<ThemeProvider theme={DarkTheme}>
			<Router>
				<Routes>
					<Route path="/" element={<SceneBackground scrollRef={scrollRef} />}>
						<Route index element={<HomePage ref={scrollRef} />} />
						<Route path="/resume" element={<Resume ref={scrollRef} />} />
					</Route>
				</Routes>
			</Router>
		</ThemeProvider>
	);
};
export default App;
