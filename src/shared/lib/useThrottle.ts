export const useThrottle = () => {
  let isThrottled = false;
  let saveArgs: () => any;

  return (func: () => any, ms: number) => {
    saveArgs = func;
    if (isThrottled) return;
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      saveArgs();
    }, ms);
  };
};
