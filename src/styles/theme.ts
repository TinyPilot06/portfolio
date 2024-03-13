import { createTheme } from "@mui/material/styles";
declare module '@mui/material/styles' {

	interface BreakpointOverrides {
		xs: false; // removes the `xs` breakpoint
		sm: false;
		md: false;
		lg: false;
		xl: false;
		mobile: true; // adds the `mobile` breakpoint
		tablet: true;
		laptop: true;
		desktop: true;
	}
}

const DarkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#ffffff',
			contrastText: '#ffffff'
		},
	},
	typography: {
		fontFamily: '"Bebas Neue", "Zen Maru Gothic", sans-serif',
		h1: {
			fontFamily: '"Bebas Neue"',
		},
		h4: {
			fontFamily: '"Bebas Neue"',
			fontSize: 36
		},
		h6: {
			fontSize: '1.25rem',
			'@media (min-width:600px)': {
				fontSize: '1.5rem',

			},
		},
		body1: {
			fontFamily: '"Zen Maru Gothic"',
			fontSize: 24,
		}
	},
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 640,
			laptop: 1024,
			desktop: 1200,
		},
	}

})

export default DarkTheme;

