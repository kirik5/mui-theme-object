import './App.css';
import MyComponent from "./MyComponent";
import {styled, ThemeProvider} from "@mui/material";
import MyTextField from "./MyTextField";
import myTheme from "./Theme";



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
                <MyTextField/>
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
