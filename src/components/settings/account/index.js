import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import styleAccount from './account.style';
import {renderTextField} from '../../../utilies/input';
import {renderFromHelper} from '../../../utilies/selector'
import {renderSelectField} from '../../../utilies/selector'

 

function Account(props){

    const classes = styleAccount();

    const { handleSubmit } = props

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
                  name="currency"
                  component={renderSelectField}
                  label="Currency"
                  />
              </div>
          </form>
        </div>
    )
}

export default reduxForm({
    form: 'accountForm'
  })(Account)
  