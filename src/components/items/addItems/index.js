import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { add_item } from '../../../redux/item/itemAction';
import {renderTextField} from '../../../utilies/input';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import styleItems from '../items.style';


function AddItem(props){

    const classes = styleItems();
    const dispatch = useDispatch();
    const { handleSubmit } = props

    const submitForm = value => {
        console.log('value', value)
        dispatch(add_item(value))
    }

    return (
        <div className={classes.addItemwrapper}>
          <h3 className="form-sub-heading">Basic Information <Chip style={{marginLeft: 'auto'}} color="primary" label="New Item"/></h3>
          <form className={classes.addItemForm} onSubmit={handleSubmit(submitForm)}>
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
                        Save
                    </Button>
                </div>
          </form>
        </div>
    )
}

export default reduxForm({
    form: 'addItemForm'
  })(AddItem)
  