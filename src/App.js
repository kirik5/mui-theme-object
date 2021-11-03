import './App.css';
import MyComponent from "./MyComponent";
import {createTheme, styled, ThemeProvider} from "@mui/material";

const paletteTheme = createTheme({
    palette: {
        primary: {
            main: '#0000FF',
        },
        secondary: {
            main: '#FF0000',
        },
        neutral: {
            main: '#64748B',
        },
    }
})

const myTheme = createTheme(paletteTheme, {
    components: {
        MyComponent: {
            styleOverrides: {
                root: {
                    backgroundColor: 'yellow',
                    padding: '10px 20px',
                    borderRadius: '3px',
                    margin: '10px',
                    '&:hover': {
                        boxShadow: '0 0 3px 0 #000000',
                    },
                },
                primary: {
                    backgroundColor: paletteTheme.palette.primary.main,
                    color: 'white',
                },
                secondary: {
                    backgroundColor: paletteTheme.palette.secondary.main,
                    color: 'white',
                },
                neutral: {
                    backgroundColor: paletteTheme.palette.neutral.main,
                    color: 'white',
                },
            },
        }
    }
})

const Wrapper = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
}))

function App() {
    return (
        <ThemeProvider theme={myTheme}>
            <Wrapper>
                <MyComponent>root</MyComponent>
                <MyComponent variant={'primary'}>primary</MyComponent>
                <MyComponent variant={'secondary'}>secondary</MyComponent>
                <MyComponent variant={'neutral'}>secondary</MyComponent>
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
