import React, { Children } from 'react';
import Button from '@material-ui/core/Button';

function Btn(props){
    const {children} = props
    return (
    <Button variant="contained">{children}</Button>
    )
}

export default Btn;