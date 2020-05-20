import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import styleEmail from './email.style';
import {renderTextField} from '../../../utilies/input';
import Switch from '@material-ui/core/Switch';
import Btn from '../../../utilies/button';


function Email(props){
    const classes = styleEmail();

    const { handleSubmit } = props

    const [state, setState] = React.useState({
        checkedA: true,
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return (
        <div>
            <form className={classes.emailForm} onSubmit={handleSubmit}>
                <div>
                    <Field
                    className="input-wrapper"
                    name="to"
                    component={renderTextField}
                    label="To"
                    />
                </div>
                <div>
                    <Field
                    className="input-wrapper"
                    name="subject"
                    component={renderTextField}
                    label="Subject"
                    />
                </div>
                <div className={classes.inputWrapper}>
                    <p className={classes.inputText}>Send me a copy</p>
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="secondary"
                    />
                </div>
                <div>
                    <Field
                    className="input-wrapper"
                    name="message"
                    component={renderTextField}
                    label="Message"
                    />
                </div>
            </form>
            <p>Thanks for your business!</p>
            <div className={classes.btnWrapper} className='btn-wrapper'>
                <Btn className={classes.button}>
                    Cancel
                </Btn>
                <Btn className={classes.button}>
                    Save
                </Btn>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'emailForm'
  })(Email)
  