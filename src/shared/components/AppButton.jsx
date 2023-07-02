import { Button } from '@mui/material';
import React from 'react';

const AppButton = (props) => {
  const { isLoading, disabled, ...restProps } = props;
  return <Button disabled={isLoading || disabled} {...restProps} />;
};

export default AppButton;
