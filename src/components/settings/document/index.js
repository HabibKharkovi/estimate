import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import styleDocument from './document.style';
import {renderTextField} from '../../../utilies/input';
import Btn from '../../../utilies/button'

function Document(props){
    const classes = styleDocument();

    const { handleSubmit } = props
    return (
        <div>
            <h3 className="form-sub-heading">Invoice Payment Settings</h3>
            <form className={classes.documentForm} onSubmit={handleSubmit}>
                <div>
                    <Field
                    className="input-wrapper"
                    name="payment_terms"
                    component={renderTextField}
                    label="Payment Terms (Days)"
                    />
                </div>
                <h3 className="form-sub-heading">Footer Message</h3>
                <Field
                    className="input-wrapper"
                    name="notes"
                    component={renderTextField}
                    label="Notes"
                    />
            </form>
            <div className={classes.btnWrapper}>
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
    form: 'documentForm'
  })(Document)