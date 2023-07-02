import React from 'react';
import { FormControl, OutlinedInput } from '@mui/material';

export default function SearchBox(props) {
  const {
    searchBoxClassName,
    placeholderText,
    onChange,
    value,
    ...restProps
  } = props;

  return (
    <FormControl fullWidth>
      <OutlinedInput
        className={searchBoxClassName}
        placeholder={placeholderText || 'Search...'}
        onChange={onChange}
        value={value}
        {...restProps}
      />
    </FormControl>
  );
}
