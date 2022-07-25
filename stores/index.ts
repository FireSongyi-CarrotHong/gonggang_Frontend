import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import counterSlice from './modules/slices/counter';

const makeStore = () => {
  const store = configureStore({
    reducer: {
      testSlice: counterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  });
  return store;
};

const wrapper = createWrapper(makeStore);
export default wrapper;
