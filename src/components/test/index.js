import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import styleDescription from './description.style';
import {renderTextField} from '../../utilies/input';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Btn from '../../utilies/button';
import Switch from '@material-ui/core/Switch';

function Description(props){
    const classes = styleDescription();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const { handleSubmit } = props
    return (
        <div className={classes.descriptionWrapper}>
        <form className={classes.descriptionForm} onSubmit={handleSubmit}>
            <div>
                <Field
                className="input-wrapper"
                name="sub_total"
                component={renderTextField}
                label="Sub Total"
                />
            </div>
            <div className={classes.inputWrapper}>
                <Field
                    className="input-wrapper"
                    className={classes.input}
                    name="markUp"
                    component={renderTextField}
                    label="Mark Up"
                />
                <div className={classes.root}  className={classes.buttonWrapper}>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Btn>%</Btn>
                        <Btn>$</Btn>
                    </ButtonGroup>
                </div>
            </div>
            <div className={classes.inputWrapper}>
                <Field
                    className="input-wrapper"
                    className={classes.input}
                    name="discount"
                    component={renderTextField}
                    label="Discount"
                />
                <div className={classes.root} className={classes.buttonWrapper}>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Btn>%</Btn>
                        <Btn>$</Btn>
                    </ButtonGroup>
                </div>
            </div>
            <div className={classes.inputWrapper}>
                <Field
                    className="input-wrapper"
                    className={classes.input}
                    name="Request_a_deposit"
                    component={renderTextField}
                    label="Request a deposit"
                />
                <div className={classes.root} className={classes.buttonWrapper}>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Btn>%</Btn>
                        <Btn>$</Btn>
                    </ButtonGroup>
                </div>
            </div>
            <div className={classes.fieldWrapper}>
                <div className={classes.innerWrapper}>
                    <Field
                        className="input-wrapper"
                        className={classes.left}
                        name="payment_name"
                        component={renderTextField}
                        label="Payment Name"
                    />
                    <Field
                        className="input-wrapper"
                        className={classes.right}
                        name="payment_amount"
                        component={renderTextField}
                        label="Payment Amount"
                    />
                </div>
                <div className={classes.root} className={classes.buttonWrapper}>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Btn>%</Btn>
                        <Btn>$</Btn>
                    </ButtonGroup>
                </div>
            </div>
            <div>
                <Field
                className="input-wrapper"
                name="tax"
                component={renderTextField}
                label="Tax"
                />
            </div>
            <div>
                <Field
                className="input-wrapper"
                name="total"
                component={renderTextField}
                label="Total(USD)"
                />
            </div>
        </form>
        <div>
        <h3 className="form-sub-heading">Contract <span className={classes.pro}>PRO</span></h3>
            <div>
                <Field
                className="input-wrapper"
                name="contract"
                component={renderTextField}
                label="Contract"
                disabled
                />
            </div>
        </div>
        <div>
        <h3 className="form-sub-heading">Signatures</h3>
        <div className={classes.signatureWrapper}>
            <div className={classes.leftSignature}>
                <div className={classes.innerContainer}>
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="secondary"
                    />
                    <p className={classes.signatureContent}>Show Client Signature</p>
                </div>
            </div>
            <div className={classes.rightSignature}>
                <div className={classes.innerContainer}>
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="secondary"
                    />
                    <p className={classes.signatureContent}>Show My Signature</p>
                </div>
                <span className={classes.sign}>Acme Co.ffv</span>
            </div>
        </div>
        <div>
            <h3 className="form-sub-heading">Note For Client</h3>
            <form onSubmit={handleSubmit}>
                <Field
                    className="input-wrapper"
                    name="note"
                    component={renderTextField}
                    label="Type Your Note Here"
                    />
            </form>
        </div>
        </div>
    </div>
    )
}

export default reduxForm({
    form: 'descriptionForm'
  })(Description)
  