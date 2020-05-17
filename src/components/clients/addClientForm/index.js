import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import styleClients from '../clients.style';
import {renderTextField} from '../../../utilies/input';
import {renderFromHelper} from '../../../utilies/selector'
import {renderSelectField} from '../../../utilies/selector'

 

function AddClient(props){

    const classes = styleClients();

    const { handleSubmit } = props

    return (
        <div className={classes.addClientwrapper}>
          <h3 className="form-sub-heading">Basic Information</h3>
          <form className={classes.addClientForm} onSubmit={handleSubmit}>
              <div>
                  <Field
                  className="input-wrapper"
                  name="name"
                  component={renderTextField}
                  label="Name"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="email"
                  component={renderTextField}
                  label="Email Address"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="phone_1"
                  component={renderTextField}
                  label="Phone (mobile)"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="phone_2"
                  component={renderTextField}
                  label="Phone (other)"
                  />
              </div>
              <h3 className="form-sub-heading">Billing Address</h3>
              <div>
                  <Field
                  className="input-wrapper"
                  name="address_1"
                  component={renderTextField}
                  label="Address"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="address_2"
                  component={renderTextField}
                  label="Address 2"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="city"
                  component={renderTextField}
                  label="City"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="state"
                  component={renderTextField}
                  label="State"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="postal_code"
                  component={renderTextField}
                  label="Zip / Postal Code"
                  />
              </div>
          </form>
        </div>
    )
}

export default reduxForm({
    form: 'addClientForm'
  })(AddClient)
  