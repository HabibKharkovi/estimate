import React, { useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styleClients from '../clients.style';
import { select_client } from '../../../redux/client/clientAction';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import {renderTextField} from '../../../utilies/input';
import {renderFromHelper} from '../../../utilies/selector'
import {renderSelectField} from '../../../utilies/selector'

 
function EditClient(props){

    const classes = styleClients();

    const { handleSubmit } = props

    return (
        <div className={classes.editClientwrapper}>
          <h3 className="form-sub-heading">Basic Information <Chip style={{marginLeft: 'auto'}} color="primary" label="Update Client"/></h3>
          <form className={classes.editClientForm} onSubmit={handleSubmit}>
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

              <Button variant="contained" size="large" color="primary" type="submit">Update</Button>
  
          </form>
        </div>
    )
}

EditClient = reduxForm({
    form: 'editClientForm', 
    enableReinitialize: true,
})(EditClient)

EditClient = connect(
    state => ({
        initialValues: state.client.selectedClient 
    })          
)(EditClient)

export default EditClient
  