import {createTheme} from "@mui/material";

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
                // primary: {
                //     backgroundColor: paletteTheme.palette.primary.main,
                //     color: 'white',
                // },
                // secondary: {
                //     backgroundColor: paletteTheme.palette.secondary.main,
                //     color: 'white',
                // },
                // neutral: {
                //     backgroundColor: paletteTheme.palette.neutral.main,
                //     color: 'white',
                // },
            },
            variants: [
                {
                    props: {variant: 'primary'},
                    style: {
                        backgroundColor: paletteTheme.palette.primary.main,
                        color: 'white',
                    }
                },
                {
                    props: {variant: 'secondary'},
                    style: {
                        backgroundColor: paletteTheme.palette.secondary.main,
                        color: 'white',
                    }
                },
                {
                    props: {variant: 'neutral'},
                    style: {
                        backgroundColor: paletteTheme.palette.neutral.main,
                        color: 'white',
                    }
                },
            ]
        },
        MyTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        padding: '10px 20px',
                        backgroundColor: 'lightgrey',
                    }
                },
            },
        },
    }
})

export default myTheme