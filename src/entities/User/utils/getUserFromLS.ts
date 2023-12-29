import { IUser } from '@shared/api';

export const getUserFromLS = (): IUser | null => {
  const user = localStorage.getItem('user');
  if (!user) return null;
  if (user === 'undefined') return null;
  return JSON.parse(user);
};
