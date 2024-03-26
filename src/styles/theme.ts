import { createTheme } from "@mui/material/styles";


const DarkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#ffffff',
			contrastText: '#000000'
		},
	},
	typography: {
		fontFamily: '"Zen Maru Gothic", sans-serif',
		h1: {
			fontFamily: '"Bebas Neue"',
		},
		h4: {
			fontFamily: '"Bebas Neue"',
			fontSize: 60
		},
		button: {
			fontFamily: '"Bebas Neue"',
			fontSize: 24
		},
		body1: {
			fontSize: 18
		}
	},
	components: {
		MuiButton: {
			styleOverrides: {
				sizeMedium: {
					fontSize: 20
				},
				sizeLarge: {
					fontSize: 24
				}
			}
		}
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1563
		}
	},
	shape: {
		borderRadius: 32
	}
})

export default DarkTheme;

