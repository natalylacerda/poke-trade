import React, { useEffect } from 'react';
import { Expire } from './styles';

export default function SnackBar({ autoHideDuration, children, setActions }) {
  const setTimer = (delay) => {
    setTimeout(() => {
      setActions('');
    }, delay);
  };

  useEffect(() => {
    setTimer(autoHideDuration);
  });

  return <Expire>{children}</Expire>;
}
