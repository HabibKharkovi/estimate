import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import './selector.style.css';

 export const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
      return
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>
    }
  }

export  const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    data,
    children,
    ...custom
  }) => (
    <FormControl error={touched && error} variant="outlined" className="input-wrapper">
      <InputLabel id="select-outlined-label" className='selectLabel'>{label}</InputLabel>
      <Select
        labelId="select-outlined-label"
        id="select-outlined"
        {...input}
        {...custom}
        inputProps={{
          name: 'age',
        }}
      >
        {data.map(item => <MenuItem value={10}>{item}</MenuItem>)}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  )