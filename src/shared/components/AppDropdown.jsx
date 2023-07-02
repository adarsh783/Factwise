import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/system';

const GroupItems = styled('ul')(() => ({
  margin: 0,
  padding: 0,
  '& > li': {
    fontSize: '16px',
    fontFamily: 'font-medium',
    padding: '15px !important',
    '&:hover': {
      backgroundColor: '#ececff !important',
    },
  },
}));

function SelectDropDown(props) {
  const {
    optionsList,
    optionsObj,
    onChange,
    value,
    variant,
    placeholder,
    selectDropDownTextFieldStyle,
    multiHeaders,
    labelKey,
    ...restProps
  } = props;

  return (
    <Autocomplete
      sx={{
        width: '100%',
        fontFamily: 'font-medium',
        '& .MuiAutocomplete-input': {
          padding: '2px 10px !important',
        },
      }}
      options={optionsList}
      getOptionLabel={(option) => (labelKey ? option?.[labelKey] || '' : option || '')}
      value={value}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant={variant}
          className={selectDropDownTextFieldStyle}
          placeholder={placeholder || 'Select option'}
        />
      )}
      renderGroup={(params) => (
        <GroupItems key={params?.id}>{params.children}</GroupItems>
      )}
      {...restProps}
    />
  );
}

export default SelectDropDown;
