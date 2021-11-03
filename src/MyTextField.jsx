import React from 'react'
import {styled, TextField} from "@mui/material";

const TextFieldStyled = styled(TextField, {
    name: 'MyTextField',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
    ]
})(() => ({}))

const MyTextField = (props) => {
    return <TextFieldStyled {...props}/>
}

export default MyTextField