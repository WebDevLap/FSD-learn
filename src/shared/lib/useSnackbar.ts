import React from 'react';

type SnackType = 'error' | 'warning' | 'info' | 'success';

export const useSnackbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [text, setText] = React.useState('');
  const [severity, setSeverity] = React.useState<SnackType>('info');

  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
  return {
    isOpen,
    text,
    severity,
    setText,
    setSeverity,
    setIsOpen,
    open,
    close,
  };
};
