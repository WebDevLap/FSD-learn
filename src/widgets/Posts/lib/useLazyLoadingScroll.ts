import { useThrottle } from '@shared/lib';
import React from 'react';

export const useLazyLoadingScroll = () => {
  const throttle = useThrottle();
  

  return (e: any, func: () => any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      150
    ) {
      throttle(() => {
        func();
      }, 1000);
    }
  };
};
