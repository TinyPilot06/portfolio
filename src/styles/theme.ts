import { createTheme } from "@mui/material/styles";


const DarkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#ffffff',
			contrastText: '#000000'
		},
		secondary: {
			main: '#133d48',
			contrastText: '#ffffff'
		},
		info: {
			main: '#6edeff',
			contrastText: '#ffffff'
		}
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
		},
		MuiPaper: {
			styleOverrides: {
				elevation0: {
					borderTop: '1px solid white',
					borderRadius: 10,
					backgroundColor: 'rgba(57, 156, 183, 0.3)',
					backdropFilter: 'blur(14px) saturate(120%) brightness(70%)'
				}
			}
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					minWidth: 32
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

