import './App.css';
import MyComponent from "./MyComponent";
import {createTheme, styled, ThemeProvider} from "@mui/material";

const myTheme = createTheme({
    components: {
        MyComponent: {
            styleOverrides: {
                root: {
                    backgroundColor: 'yellow',
                    padding: '10px 20px',
                    borderRadius: '3px',
                    '&:hover': {
                        boxShadow: '0 0 3px 0 #000000',
                    },
                    '@media(min-width: 768px)': {
                        backgroundColor: 'yellowgreen',
                    },
                },
            }
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
                <MyComponent>This is my component!</MyComponent>
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
