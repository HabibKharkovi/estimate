import React from 'react';
import TextField from '@material-ui/core/TextField';


export const renderTextField = ({
    label,
    input,
    value,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      variant="outlined"
      label={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
)