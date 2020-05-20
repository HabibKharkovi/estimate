import React, { Children } from 'react';
import Button from '@material-ui/core/Button';
import styleButton from './button.style';

function Btn(props){
    const {children} = props
    const classes = styleButton();
    return (
        <div className={classes.root}>
            <Button variant="contained">{children}</Button>
        </div>
    )
}

export default Btn;