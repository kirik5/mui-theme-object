import React from 'react'
import {styled} from "@mui/material";


const MyComponentStyled = styled('div', {
    name: 'MyComponent',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
    ]
})(() => ({}))

const MyComponent = ({children}) => {
    return <MyComponentStyled>{children}</MyComponentStyled>
}

export default MyComponent