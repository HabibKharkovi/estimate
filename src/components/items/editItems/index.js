import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderTextField} from '../../../utilies/input';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import styleItems from '../items.style';



function EditItem(props){

    const classes = styleItems();

    const { handleSubmit } = props

    return (
        <div className={classes.editItemwrapper}>
          <h3 className="form-sub-heading">Basic Information <Chip style={{marginLeft: 'auto'}} color="primary" label="Update Item"/></h3>
          <form className={classes.editItemForm} onSubmit={handleSubmit}>
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
              <h3 className="form-sub-heading">Description</h3>
              <div>
                  <Field
                  className="input-wrapper"
                  name="description"
                  component={renderTextField}
                  label="Description"
                  />
              </div>
                <div className='btn-wrapper'>
                    <Button variant="contained" size="large" color="primary" type="submit">
                        Update
                    </Button>
                </div>
          </form>
        </div>
    )
}

export default reduxForm({
    form: 'editItemForm'
  })(EditItem)
  