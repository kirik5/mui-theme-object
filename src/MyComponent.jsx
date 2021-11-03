import React from 'react'
import {styled} from "@mui/material";


const MyComponentStyled = styled('div', {
    shouldForwardProp: (prop) => prop !== 'variant',
    name: 'MyComponent',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
        props.variant === 'primary' && styles.primary,
        props.variant === 'secondary' && styles.secondary,
        props.variant === 'neutral' && styles.neutral,
    ]
})(() => ({}))

const MyComponent = ({children, ...rest}) => {
    return <MyComponentStyled {...rest}>{children}</MyComponentStyled>
}

export default MyComponent