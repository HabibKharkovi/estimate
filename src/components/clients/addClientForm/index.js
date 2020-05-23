import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import {add_client} from '../../../redux/client/clientAction';
import styleClients from '../clients.style';
import {renderTextField} from '../../../utilies/input';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import {renderFromHelper} from '../../../utilies/selector'
import {renderSelectField} from '../../../utilies/selector'

 

function AddClient(props){

    const classes = styleClients();
    const dispatch = useDispatch();

    const { handleSubmit } = props

    const submitForm = value => {
        dispatch(add_client(value))
    }

    return (
        <div className={classes.addClientwrapper}>
          <h3 className="form-sub-heading">Basic Information <Chip style={{marginLeft: 'auto'}} color="primary" label="New Client"/></h3>
          <form className={classes.addClientForm} onSubmit={handleSubmit(submitForm)}>
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
              <Button variant="contained" size="large" color="primary" type="submit">Save</Button>
          </form>
        </div>
    )
}

export default reduxForm({
    form: 'addClientForm'
  })(AddClient)
  