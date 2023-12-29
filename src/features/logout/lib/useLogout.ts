import { useAppDispatch } from '@app/store';
import { setUser } from '@entities/User';
import React from 'react';

export const useLogout = () => {
  const dispatch = useAppDispatch();

  return () => {
    dispatch(setUser(null));
    localStorage.removeItem('user');
  };
};
