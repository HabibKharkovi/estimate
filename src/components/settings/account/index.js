import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import styleAccount from './account.style';
import {renderTextField} from '../../../utilies/input';
import {renderFromHelper} from '../../../utilies/selector';
import {renderSelectField} from '../../../utilies/selector';
import Button from '@material-ui/core/Button';

 

function Account(props){

    const classes = styleAccount();

    const { handleSubmit } = props
    console.log('accout', props)
    return (
        <div className={classes.accountwrapper}>
            <h3 className="form-sub-heading">Account Information</h3>
            <form className={classes.accountForm} onSubmit={handleSubmit}>
                <div>
                    <Field
                    className="input-wrapper"
                    name="firstName"
                    component={renderTextField}
                    label="First Name"
                    />
                </div>
                <div>
                    <Field
                    className="input-wrapper"
                    name="lastName"
                    component={renderTextField}
                    label="Last Name"
                    />
                </div>
                <div>
                    <Field
                    className="input-wrapper"
                    name="email"
                    component={renderTextField}
                    label="Email"
                    />
                </div>
                <div>
                    <Field
                    className="input-wrapper"
                    name="currency"
                    component={renderSelectField}
                    label="Currency"
                    data={['Australian Dollar (AUD)', 'Canadian Dollar (CAD)', 'Great Britain Pound (GBP)', 'US Dollar (USD)']}
                    />
                </div>
                <div>
                    <Field
                    className="input-wrapper"
                    name="locale"
                    component={renderSelectField}
                    label="Locale"
                    data={['Australia', 'Canada (English)', 'United Kingdom', 'United States']}
                    />
                </div>
                <p className={classes.formText}>Locale changes date, number format and language on documents</p>
                <div className={classes.btnGroup}>
                    <Button color="primary" variant="contained" size="large" className={classes.mr}>
                        Cancel
                    </Button>
                    <Button color="primary" variant="contained" size="large">
                        Save
                    </Button>
               </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'accountForm'
  })(Account)
  