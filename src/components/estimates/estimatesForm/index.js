import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderTextField} from '../../../utilies/input';
import { DropzoneArea } from 'material-ui-dropzone';
import usestyles from './estimatesForm.style';


function EstimatesForm(props){

    const classes = usestyles();

    const { handleSubmit } = props

    return (
        <div className={classes.estimatesFormwrapper}>
          <h3 className="form-sub-heading">Estimate #232</h3>
          <form className={classes.estimatesFormForm} onSubmit={handleSubmit}>
              <div>
                  <Field
                  className="input-wrapper"
                  name="estimate_no"
                  component={renderTextField}
                  label="Estimate #"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="date"
                  component={renderTextField}
                  label="Date"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="po_no"
                  component={renderTextField}
                  label="PO Number"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="markup"
                  component={renderTextField}
                  label="markup"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="discount"
                  component={renderTextField}
                  label="Discount"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="Request a deposit"
                  component={renderTextField}
                  label="Request a deposit"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="total"
                  component={renderTextField}
                  label="Total  (AUD)"
                  />
              </div>
              <div className={classes.uploadGroup}>
                <div className={classes.uploadfile}>
                <h3 className="form-sub-heading">Attachments</h3>
                    <DropzoneArea
                      onChange={(files) => console.log('Files:', files)}
                    />
                </div>
                <div className={classes.uploadPhoto}>
                <h3 className="form-sub-heading">Photos</h3>
                    <DropzoneArea
                    acceptedFiles={['image/*']}
                    dropzoneText={"Drag and drop an image here or click"}
                    onChange={(files) => console.log('Files:', files)}
                    />
                </div>
              </div>
          </form>
        </div>
    )
}

export default reduxForm({
    form: 'estimatesFormForm'
  })(EstimatesForm)
  