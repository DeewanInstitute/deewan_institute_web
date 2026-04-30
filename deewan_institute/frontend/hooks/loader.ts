// store/loaderStore.ts

let loading = false;
let listeners: ((state: boolean) => void)[] = [];

export const showLoader = () => {
  loading = true;
  listeners.forEach((fn) => fn(loading));
};

export const hideLoader = () => {
  loading = false;
  listeners.forEach((fn) => fn(loading));
};

export const subscribe = (fn: (state: boolean) => void) => {
  listeners.push(fn);
  fn(loading);
  return () => {
    listeners = listeners.filter((l) => l !== fn);
  };
};