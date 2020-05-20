import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import stylePayment from './payment.style';
import {renderTextField} from '../../../utilies/input';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Btn from '../../../utilies/button';


function Payment(props){
    const classes = stylePayment();

    const { handleSubmit } = props
    return (
        <div>
             <h3 className="form-sub-heading">Payment</h3>
             <form className={classes.paymentForm} onSubmit={handleSubmit}>
                <div>
                    <Field
                    className="input-wrapper"
                    name="payment"
                    component={renderTextField}
                    label="Payment"
                    />
                </div>
             </form>
            <div className={classes.root} className={classes.buttonWrapper}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Btn>%</Btn>
                    <Btn>$</Btn>
                    <Btn>$</Btn>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'paymentForm'
  })(Payment)