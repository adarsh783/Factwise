import { FormControl, TextField, Typography } from '@mui/material';
import React from 'react';
import { isNumber, isStringWithoutNumber } from '../utils/helper';

const FormField = (props) => {
  const {
    label,
    fullWidth,
    variant,
    dropdownProps,
    endLabel,
    startLabel,
    required,
    labelVarient,
    labelClassName,
    errorMessage,
    errorVarient,
    isKeyDown,
    endAdornment,
    sx,
    ...restProps
  } = props;

  const handleKeyDown = (event) => {
    if (restProps?.feildType === 'number' || restProps?.type === 'number') {
      if (event.key !== 'Backspace' && !isNumber(event?.key)) event.preventDefault();
    } else {
      if (event.key !== 'Backspace' && !isStringWithoutNumber(event?.key)) event.preventDefault();
    }
  };

  return (
    <FormControl fullWidth>
      {label && (
        <Typography variant={labelVarient} className={labelClassName} mb={1}>
          {label} {required && <font color="red"> *</font>}
        </Typography>
      )}
      <TextField
        required={required}
        variant={variant}
        // maxLength={1}
        onKeyDown={handleKeyDown}
        sx={{ ...sx }}
        InputProps={{ ...restProps.InputProps }}
        {...restProps}
      />
      {errorMessage && (
        <Typography
          variant={errorVarient}
          mt={1}
          sx={{
            color: '#ff2b2b',
          }}
        >
          {errorMessage}
        </Typography>
      )}
    </FormControl>
  );
};

export default FormField;
