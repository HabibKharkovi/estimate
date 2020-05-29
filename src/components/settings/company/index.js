import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styleCompany from './company.style';
import {renderTextField} from '../../../utilies/input';
import Button from '@material-ui/core/Button';

function Company(props){
    const classes = styleCompany();

    const { handleSubmit } = props
    return (
        <div className={classes.addClientwrapper}>
          <h3 className="form-sub-heading">Basic Information</h3>
          <form className={classes.companyForm} onSubmit={handleSubmit}>
              <div>
                  <Field
                  className="input-wrapper"
                  name="companyName"
                  component={renderTextField}
                  label="Company Name"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="phone_number"
                  component={renderTextField}
                  label="Phone Number"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="address_1"
                  component={renderTextField}
                  label="Address 1"
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
              <div className={classes.inputWrapper}>
                <div className={classes.rightInput}>
                    <Field
                    className="input-wrapper"
                    name="city"
                    component={renderTextField}
                    label="City"
                    />
                </div>
                <div className={classes.leftInput}>
                    <Field
                    className="input-wrapper"
                    name="state"
                    component={renderTextField}
                    label="State/Province"
                    />
                </div>
              </div>
              <div  className={classes.inputWrapper}>
                <div className={classes.rightInput}>
                    <Field
                    className="input-wrapper"
                    name="country"
                    component={renderTextField}
                    label="Country"
                    />
                </div>
                <div className={classes.leftInput}>
                    <Field
                    className="input-wrapper"
                    name="postal_code"
                    component={renderTextField}
                    label="Zip/Postal Code"
                    />
                </div>
              </div>
              <div>
                    <Field
                    className="input-wrapper"
                    name="tax_number"
                    component={renderTextField}
                    label="Business / Tax Number"
                    />
                </div>
              <h3 className="form-sub-heading">Additional Information</h3>
              <div>
                  <Field
                  className="input-wrapper"
                  name="companyEmail"
                  component={renderTextField}
                  label="Company Email"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="phone"
                  component={renderTextField}
                  label="Phone #2"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="fax"
                  component={renderTextField}
                  label="Fax"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="website"
                  component={renderTextField}
                  label="Website"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="industry"
                  component={renderTextField}
                  label="Industry"
                  />
              </div>
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
    form: 'companyForm'
  })(Company)