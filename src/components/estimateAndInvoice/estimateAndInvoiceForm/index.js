import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderTextField} from '../../../utilies/input';
import { DropzoneArea } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Switch from '@material-ui/core/Switch';
import usestyles from './estimateAndInvoiceForm.style';



function EstimateAndInvoiceForm(props){

    const classes = usestyles();

    const { handleSubmit } = props

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className={classes.estimateAndInvoiceFormwrapper}>
          <h3 className="form-sub-heading">Estimate #4223</h3>
          <form className={classes.estimateAndInvoiceFormForm} onSubmit={handleSubmit}>
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
                  label="Markup"
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
                  name="Request_a_deposit"
                  component={renderTextField}
                  label="Request a deposit"
                  />
              </div>
              <div>
                  <Field
                  className="input-wrapper"
                  name="total"
                  component={renderTextField}
                  label="Total  (USD)"
                  />
              </div>
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
                    <ButtonGroup className={classes.btnGroup} color="primary" aria-label="outlined primary button group">
                        <Button className={classes.btn}>%</Button>
                        <Button className={classes.btn}>$</Button>
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
                        <ButtonGroup className={classes.btnGroup} color="primary" aria-label="outlined primary button group">
                            <Button className={classes.btn}>%</Button>
                            <Button className={classes.btn}>$</Button>
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
                        <ButtonGroup className={classes.btnGroup} color="primary" aria-label="outlined primary button group">
                            <Button className={classes.btn}>%</Button>
                            <Button className={classes.btn}>$</Button>
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
                        <ButtonGroup className={classes.btnGroup} color="primary" aria-label="outlined primary button group">
                            <Button className={classes.btn}>%</Button>
                            <Button className={classes.btn}>$</Button>
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
                <h3 className="form-sub-heading">Signatures</h3>
                <div className={classes.signatureWrapper}>
                    <div className={classes.leftSignature}>
                        <div className={classes.innerContainer}>
                            <Switch
                                checked={state.checkedA}
                                onChange={handleChange}
                                name="checkedA"
                                color="primary"
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
                                color="primary"
                            />
                            <p className={classes.signatureContent}>Show My Signature</p>
                        </div>
                        <span className={classes.sign}>Acme Co.ffv</span>
                    </div>
                </div>
                <div className={classes.noteClient}>
                    <h3 className="form-sub-heading">Note For Client</h3>
                        <Field
                            className="input-wrapper"
                            name="note"
                            component={renderTextField}
                            label="Type Your Note Here"
                        />
                </div>
                <div className={classes.uploadGroup, 'upload-group'}>
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
    form: 'estimateAndInvoiceFormForm'
  })(EstimateAndInvoiceForm)
  