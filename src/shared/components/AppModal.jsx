import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function AppModal(props) {
  const {
    open,
    handleModal,
    isFullWidth,
    maxWidth,
    closeIconColor,
    isCloseIcon,
    paperProps,
    isBackDrop,
    ...restProps
  } = props;

  return (
    <Dialog
      open={open}
      onClose={handleModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={isFullWidth}
      maxWidth={maxWidth}
      PaperProps={paperProps}
    >
      {isCloseIcon && (
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: closeIconColor,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      )}
      <DialogContent>{restProps.children}</DialogContent>
    </Dialog>
  );
}

export default AppModal;
