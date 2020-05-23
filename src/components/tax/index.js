import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import {renderTextField} from '../../utilies/input';
import Button from '@material-ui/core/Button';
import useStyles from './tax.style';

function Tax(props){

    const classes = useStyles();
    const dispatch = useDispatch();
    const { handleSubmit } = props

    const submitForm = value => {
        console.log('value', value)
    }

    return (
        <div className={classes.taxwrapper}>
          <h3 className="form-sub-heading">New Tax</h3>
          <form className={classes.taxForm} onSubmit={handleSubmit(submitForm)}>
                <div>
                    <Field
                    className="input-wrapper"
                    name="tax_name"
                    component={renderTextField}
                    label="Tax Name"
                    />
                </div>
                <div>
                    <Field
                    className="input-wrapper"
                    name="tax_per"
                    component={renderTextField}
                    label="Tax %"
                    />
                </div>
                <div className='btn-wrapper'>
                    <Button variant="contained" size="large" color="primary" type="submit">
                        Add Tax
                    </Button>
                </div>
          </form>
        </div>
    )
}

export default reduxForm({
    form: 'taxForm'
  })(Tax)
  