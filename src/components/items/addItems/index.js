import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import styleItems from '../items.style';
import {renderTextField} from '../../../utilies/input';
import Btn from '../../../utilies/button';


function AddItem(props){

    const classes = styleItems();

    const { handleSubmit } = props

    return (
        <div className={classes.addItemwrapper}>
          <h3 className="form-sub-heading">Basic Information</h3>
          <form className={classes.addItemForm} onSubmit={handleSubmit}>
              <div>
                  <Field
                  className="input-wrapper"
                  name="name"
                  component={renderTextField}
                  label="Item Name"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="rate"
                  component={renderTextField}
                  label="Rate"
                  />
              </div>
              <h3 className="form-sub-heading">Add Taxes</h3>
              <div>
                  <Field
                  className="input-wrapper"
                  name="text_name"
                  component={renderTextField}
                  label="Text Name"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="text_per"
                  component={renderTextField}
                  label="Text %"
                  />
              </div>
              <h3 className="form-sub-heading">Tax List</h3>
              <h3 className="form-sub-heading">Description</h3>
              <div>
                  <Field
                  className="input-wrapper"
                  name="description"
                  component={renderTextField}
                  label="Description"
                  />
              </div>
          </form>
          <div className='btn-wrapper'>
                <Btn>
                    Cancel
                </Btn>
                <Btn>
                    Save
                </Btn>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'addItemForm'
  })(AddItem)
  