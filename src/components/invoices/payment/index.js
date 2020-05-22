import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import stylePayment from './payment.style';
import {renderTextField} from '../../../utilies/input';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';



function Payment(props){
    const classes = stylePayment();

    const { handleSubmit } = props
    return (
        <div>
             <h3 className="form-sub-heading">Payment</h3>
             <form className={classes.paymentForm} onSubmit={handleSubmit}>
                <div className={classes.wrapper}>
                    <div className={classes.left}>
                        <Field
                        className="input-wrapper"
                        name="payment"
                        component={renderTextField}
                        label="Payment"
                        />
                    </div>
                    <div className={classes.root} className={`${classes.buttonWrapper} ${classes.right}`}>
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button>$</Button>
                            <Button>%</Button>
                            <Button>full</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div>
                    <Field
                    className="input-wrapper"
                    name="payment_date"
                    component={renderTextField}
                    label="Payment Date"
                    />
                </div>
                <h3 className="form-sub-heading">Payment Method</h3>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>Cash</Button>
                    <Button>Check</Button>
                    <Button>Credit</Button>
                    <Button>Bank Transfer</Button>
                </ButtonGroup>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'paymentForm'
  })(Payment)