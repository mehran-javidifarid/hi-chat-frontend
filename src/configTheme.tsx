import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Box, CssBaseline} from "@mui/material";
// @ts-ignore
import VazirWoff2 from './assets/fonts/dana-fanum-regular.woff2'

const CustomTheme = ({children}: any) => {
    const mode = 'light'

    // @ts-ignore
    const cTheme = React.useMemo(() => createTheme({...constantTheme(mode)}), [mode]);

    return (
        <ThemeProvider theme={cTheme}>
            <CssBaseline/>
            <Box sx={{
                fontFamily: 'vazirFont', direction: 'ltr',
            }}>
                {children}
            </Box>
        </ThemeProvider>
    )
};

export default CustomTheme

//config global theme
const constantTheme = (mode: any) => ({
    direction: 'rtl',
    typography: {
        fontFamily: 'vazirFont',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                  font-family: 'vazirFont';
                  src: local('Vazir'), local('Vazir-Regular'), url(${VazirWoff2}) format('woff2');
                }
            `,
        },
    },
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#3462CD ',
                    contrastText: '#ffffff',
                },
                secondary: {
                    main: '#ffffff ',
                    contrastText: '#3462CD',
                },

            }
            : {
                primary: '#0068FF',
            }),
    },
})